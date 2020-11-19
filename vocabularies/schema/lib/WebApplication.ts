import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SoftwareApplicationMixin } from './SoftwareApplication';

export interface WebApplication<ID extends ResourceNode = ResourceNode> extends Schema.SoftwareApplication<ID>, RdfResource<ID> {
  browserRequirements: string | undefined;
}

export function WebApplicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebApplicationClass extends SoftwareApplicationMixin(Resource) implements WebApplication {
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
