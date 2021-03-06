import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SoftwareApplicationMixin } from './SoftwareApplication';

export interface WebApplication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SoftwareApplication<D>, RdfResource<D> {
  browserRequirements: string | undefined;
}

export function WebApplicationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WebApplication> & RdfResourceCore> & Base {
  @namespace(schema)
  class WebApplicationClass extends SoftwareApplicationMixin(Resource) implements Partial<WebApplication> {
    @property.literal()
    browserRequirements: string | undefined;
  }
  return WebApplicationClass
}

class WebApplicationImpl extends WebApplicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebApplication>) {
    super(arg, init)
    this.types.add(schema.WebApplication)
  }

  static readonly __mixins: Mixin[] = [WebApplicationMixin, SoftwareApplicationMixin];
}
WebApplicationMixin.appliesTo = schema.WebApplication
WebApplicationMixin.Class = WebApplicationImpl

export const fromPointer = createFactory<WebApplication>([SoftwareApplicationMixin, WebApplicationMixin], { types: [schema.WebApplication] });
