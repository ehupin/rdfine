import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MoveActionMixin } from './MoveAction';

export interface ArriveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MoveAction<D>, RdfResource<D> {
}

export function ArriveActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ArriveAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ArriveActionClass extends MoveActionMixin(Resource) implements Partial<ArriveAction> {
  }
  return ArriveActionClass
}

class ArriveActionImpl extends ArriveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ArriveAction>) {
    super(arg, init)
    this.types.add(schema.ArriveAction)
  }

  static readonly __mixins: Mixin[] = [ArriveActionMixin, MoveActionMixin];
}
ArriveActionMixin.appliesTo = schema.ArriveAction
ArriveActionMixin.Class = ArriveActionImpl

export const fromPointer = createFactory<ArriveAction>([MoveActionMixin, ArriveActionMixin], { types: [schema.ArriveAction] });
