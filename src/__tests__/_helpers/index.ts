import stringToStream from 'string-to-stream'
import rdf from 'rdf-ext'
import Parser from '@rdfjs/parser-n3'
import { Dataset, NamedNode } from 'rdf-js'
import ns from '@rdfjs/namespace'
import { prefixes } from '@zazuko/rdf-vocabularies'

const parser = new Parser()

export async function parse(quads: string): Promise<Dataset> {
  const stream = stringToStream(quads) as any

  return rdf.dataset().import(await parser.import(stream))
}

prefixes.ex = 'http://example.com/'

const vocab = Object.entries(prefixes)
  .reduce((map, [key, value]) => {
    return {
      ...map,
      [key]: ns(value),
    }
  }, {}) as {
  [P in keyof typeof prefixes]: Record<string, NamedNode>;
}
export const vocabs = { ...vocab }
