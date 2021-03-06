import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlanActionMixin } from './PlanAction';

export interface ScheduleAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlanAction<D>, RdfResource<D> {
}

export function ScheduleActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ScheduleAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ScheduleActionClass extends PlanActionMixin(Resource) implements Partial<ScheduleAction> {
  }
  return ScheduleActionClass
}

class ScheduleActionImpl extends ScheduleActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScheduleAction>) {
    super(arg, init)
    this.types.add(schema.ScheduleAction)
  }

  static readonly __mixins: Mixin[] = [ScheduleActionMixin, PlanActionMixin];
}
ScheduleActionMixin.appliesTo = schema.ScheduleAction
ScheduleActionMixin.Class = ScheduleActionImpl

export const fromPointer = createFactory<ScheduleAction>([PlanActionMixin, ScheduleActionMixin], { types: [schema.ScheduleAction] });
