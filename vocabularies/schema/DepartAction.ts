import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import MoveActionMixin from './MoveAction';

export interface DepartAction extends Schema.MoveAction, RdfResource {
}

export default function DepartActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DepartActionClass extends MoveActionMixin(Resource) implements DepartAction {
  }
  return DepartActionClass
}

class DepartActionImpl extends DepartActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DepartAction>) {
    super(arg, init)
    this.types.add(schema.DepartAction)
  }
}
DepartActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DepartAction)
DepartActionMixin.Class = DepartActionImpl