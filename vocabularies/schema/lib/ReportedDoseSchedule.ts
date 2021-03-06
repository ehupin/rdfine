import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DoseScheduleMixin } from './DoseSchedule';

export interface ReportedDoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DoseSchedule<D>, RdfResource<D> {
}

export function ReportedDoseScheduleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ReportedDoseSchedule> & RdfResourceCore> & Base {
  @namespace(schema)
  class ReportedDoseScheduleClass extends DoseScheduleMixin(Resource) implements Partial<ReportedDoseSchedule> {
  }
  return ReportedDoseScheduleClass
}

class ReportedDoseScheduleImpl extends ReportedDoseScheduleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReportedDoseSchedule>) {
    super(arg, init)
    this.types.add(schema.ReportedDoseSchedule)
  }

  static readonly __mixins: Mixin[] = [ReportedDoseScheduleMixin, DoseScheduleMixin];
}
ReportedDoseScheduleMixin.appliesTo = schema.ReportedDoseSchedule
ReportedDoseScheduleMixin.Class = ReportedDoseScheduleImpl

export const fromPointer = createFactory<ReportedDoseSchedule>([DoseScheduleMixin, ReportedDoseScheduleMixin], { types: [schema.ReportedDoseSchedule] });
