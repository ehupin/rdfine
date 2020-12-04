import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AchieveActionMixin } from './AchieveAction';

export interface LoseAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AchieveAction<D>, RdfResource<D> {
  winner: Schema.Person<D> | undefined;
}

export function LoseActionMixin<Base extends Constructor>(Resource: Base): Constructor<LoseAction> & Base {
  @namespace(schema)
  class LoseActionClass extends AchieveActionMixin(Resource) implements LoseAction {
    @property.resource()
    winner: Schema.Person | undefined;
  }
  return LoseActionClass
}

class LoseActionImpl extends LoseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LoseAction>) {
    super(arg, init)
    this.types.add(schema.LoseAction)
  }

  static readonly __mixins: Mixin[] = [LoseActionMixin, AchieveActionMixin];
}
LoseActionMixin.appliesTo = schema.LoseAction
LoseActionMixin.Class = LoseActionImpl
