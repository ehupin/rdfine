import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import GovernmentBuildingMixin from './GovernmentBuilding';

export interface Courthouse extends Schema.GovernmentBuilding, RdfResource {
}

export default function CourthouseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourthouseClass extends GovernmentBuildingMixin(Resource) implements Courthouse {
  }
  return CourthouseClass
}

class CourthouseImpl extends CourthouseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Courthouse>) {
    super(arg, init)
    this.types.add(schema.Courthouse)
  }
}
CourthouseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Courthouse)
CourthouseMixin.Class = CourthouseImpl