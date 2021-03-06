import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface AboutPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, RdfResource<D> {
}

export function AboutPageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AboutPage> & RdfResourceCore> & Base {
  @namespace(schema)
  class AboutPageClass extends WebPageMixin(Resource) implements Partial<AboutPage> {
  }
  return AboutPageClass
}

class AboutPageImpl extends AboutPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AboutPage>) {
    super(arg, init)
    this.types.add(schema.AboutPage)
  }

  static readonly __mixins: Mixin[] = [AboutPageMixin, WebPageMixin];
}
AboutPageMixin.appliesTo = schema.AboutPage
AboutPageMixin.Class = AboutPageImpl

export const fromPointer = createFactory<AboutPage>([WebPageMixin, AboutPageMixin], { types: [schema.AboutPage] });
