import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface MoveAction extends Schema.Action, RdfResource {
  fromLocation: Schema.Place;
  toLocation: Schema.Place;
}

export default function MoveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MoveActionClass extends ActionMixin(Resource) implements MoveAction {
    @property.resource()
    fromLocation!: Schema.Place;
    @property.resource()
    toLocation!: Schema.Place;
  }
  return MoveActionClass
}

class MoveActionImpl extends MoveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MoveAction>) {
    super(arg, init)
    this.types.add(schema.MoveAction)
  }
}
MoveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MoveAction)
MoveActionMixin.Class = MoveActionImpl
