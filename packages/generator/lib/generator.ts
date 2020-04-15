import { prefixes } from '@zazuko/rdf-vocabularies'
import { ArrayLiteralExpression, Project } from 'ts-morph'
import { generateNamespace } from './namespace'
import { Context, GeneratedModule, ModuleStrategy } from './index'
import { TypeMetaCollection } from './types'

export async function generate(project: Project, types: TypeMetaCollection, strategies: ModuleStrategy[], context: Context) {
  const { log, prefix } = context

  log.debug('Generating vocabulary <%s>', prefixes[prefix])
  generateNamespace({ project }, context)
  const indexModule = project.createSourceFile('index.ts', {}, { overwrite: true })

  indexModule.addImportDeclaration({
    namedImports: ['Mixin'],
    moduleSpecifier: '@tpluscode/rdfine/lib/ResourceFactory',
  })
  const defaultExport = indexModule.addExportAssignment({
    expression: '[]',
    isExportEquals: false,
  }).getExpression() as ArrayLiteralExpression

  const writers = strategies.reduce((moduleWriters, findTermsToGenerate) => {
    return findTermsToGenerate(types, context)
      .reduce((moduleWriters, writer) => {
        if (moduleWriters.has(writer.node.value)) {
          log.debug(`Type ${writer.node.value} has already been selected by another strategy`)
        }

        moduleWriters.set(writer.node.value, writer)
        return moduleWriters
      }, moduleWriters)
  }, new Map<string, GeneratedModule>())

  await [...writers.values()]
    .filter(({ node }) => {
      if (!types.get(node)) {
        log.warn(`Skipping excluded type ${node.value}`)
        return false
      }

      return true
    })
    .sort((left, right) => left.node.value.localeCompare(right.node.value))
    .reduce((previous, moduleWriter) => {
      return previous.then(async () => {
        try {
          const moduleSpecifier = moduleWriter.type.module
          const sourceFile = project.createSourceFile(`${moduleWriter.type.module}.ts`, {}, { overwrite: true })

          const result = moduleWriter.writeModule(sourceFile, types, context)
          if (result.mainModuleExport) {
            const namedExports = [result.mainModuleExport]
            indexModule.addExportDeclaration({
              namedExports,
              moduleSpecifier,
            })
          }

          if (moduleWriter.type.type === 'Resource') {
            indexModule.addImportDeclaration({
              defaultImport: moduleWriter.type.mixinName,
              moduleSpecifier,
            })
            defaultExport.addElement(`${moduleWriter.type.mixinName} as Mixin`, { useNewLines: true })
          }
        } catch (e) {
          context.log.error('Failed to generate type %s\n%s', moduleWriter.node.value, e.message)
        }

        await project.save()
      })
    }, Promise.resolve())
}