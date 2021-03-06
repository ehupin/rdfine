import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserPlusOnes<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, RdfResource<D> {
}

export function UserPlusOnesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserPlusOnes> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserPlusOnesClass extends UserInteractionMixin(Resource) implements Partial<UserPlusOnes> {
  }
  return UserPlusOnesClass
}

class UserPlusOnesImpl extends UserPlusOnesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserPlusOnes>) {
    super(arg, init)
    this.types.add(schema.UserPlusOnes)
  }

  static readonly __mixins: Mixin[] = [UserPlusOnesMixin, UserInteractionMixin];
}
UserPlusOnesMixin.appliesTo = schema.UserPlusOnes
UserPlusOnesMixin.Class = UserPlusOnesImpl

export const fromPointer = createFactory<UserPlusOnes>([UserInteractionMixin, UserPlusOnesMixin], { types: [schema.UserPlusOnes] });
