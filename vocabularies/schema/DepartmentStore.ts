import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface DepartmentStore extends Schema.Store, RdfResource {
}

export default function DepartmentStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DepartmentStoreClass extends StoreMixin(Resource) implements DepartmentStore {
  }
  return DepartmentStoreClass
}

class DepartmentStoreImpl extends DepartmentStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DepartmentStore>) {
    super(arg, init)
    this.types.add(schema.DepartmentStore)
  }
}
DepartmentStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DepartmentStore)
DepartmentStoreMixin.Class = DepartmentStoreImpl