import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserBlocks extends Schema.UserInteraction, RdfResource {
}

export default function UserBlocksMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserBlocksClass extends UserInteractionMixin(Resource) implements UserBlocks {
  }
  return UserBlocksClass
}

class UserBlocksImpl extends UserBlocksMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserBlocks>) {
    super(arg, init)
    this.types.add(schema.UserBlocks)
  }
}
UserBlocksMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserBlocks)
UserBlocksMixin.Class = UserBlocksImpl