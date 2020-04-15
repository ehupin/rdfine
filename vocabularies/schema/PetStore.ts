import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface PetStore extends Schema.Store, RdfResource {
}

export default function PetStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PetStoreClass extends StoreMixin(Resource) implements PetStore {
  }
  return PetStoreClass
}

class PetStoreImpl extends PetStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PetStore>) {
    super(arg, init)
    this.types.add(schema.PetStore)
  }
}
PetStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PetStore)
PetStoreMixin.Class = PetStoreImpl