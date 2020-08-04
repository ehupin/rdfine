import type { RdfResource } from '@tpluscode/rdfine'
import type { Clownface } from 'clownface';
import URITemplate from 'es6-url-template'
import { URL } from 'url'
import { IriTemplate, IriTemplateMapping } from '../'
import { Term } from 'rdf-js';
import { hydra } from './namespace';
import { xsd } from '@tpluscode/rdf-ns-builders';

interface TemplateValueMapper {
  mapValue(term: Term): string;
}

class BasicRepresentationMapper implements TemplateValueMapper {
  mapValue(term: Term): string {
    return term.value;
  }
}

class ExplicitRepresentationMapper implements TemplateValueMapper {
  mapValue(term: Term): string {
    let explicitRepresentation
    switch (term.termType) {
      case 'NamedNode':
        explicitRepresentation = term.value
        break;
      case 'Literal':
        if (!term.datatype || term.datatype.equals(xsd.string)) {
          explicitRepresentation = `"${term.value}"`
        } else if (term.language) {
          explicitRepresentation = `"${term.value}"@${term.language}`
        } else {
          explicitRepresentation = `"${term.value}"^^${term.datatype.value}`
        }
        break;
      default:
        throw new Error(`Cannot use term ${term.termType} for template variable expansion`)
    }

    return decodeURIComponent(explicitRepresentation);
  }
}

export class TemplateExpander {
  private readonly __template: IriTemplate
  private readonly __mapper: TemplateValueMapper

  constructor(template: IriTemplate) {
    this.__template = template

    if (hydra.ExplicitRepresentation.equals(template.variableRepresentation)) {
      this.__mapper = new ExplicitRepresentationMapper()
    } else {
      this.__mapper = new BasicRepresentationMapper()
    }
  }

  public expand(model: Clownface | RdfResource): string {
    const uriTemplate = new URITemplate(this.__template.template)

    const variables = this.buildExpansionModel(this.__template.mapping, 'id' in model ? model._selfGraph : model)
    const expanded = uriTemplate.expand(variables)

    if (this.__template._parent && !this.__template._parent.isAnonymous) {
      return new URL(expanded, this.__template._parent.id.value).toString()
    }

    return expanded
  }

  private buildExpansionModel(mappings: IriTemplateMapping[], templateValues: Clownface): Record<string, string[]> {
    return mappings.reduce<Record<string, string[]>>((model, mapping) => {
      const values = templateValues.out(mapping.property.id)
        .map(({ term }) => this.__mapper.mapValue(term))

      if (values.length === 0) {
        return model
      }

      return {
        ...model,
        [mapping.variable]: values,
      }
    }, {})
  }
}
