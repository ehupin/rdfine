import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTherapyMixin } from './MedicalTherapy';

export interface OccupationalTherapy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTherapy<D>, RdfResource<D> {
}

export function OccupationalTherapyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OccupationalTherapy> & RdfResourceCore> & Base {
  @namespace(schema)
  class OccupationalTherapyClass extends MedicalTherapyMixin(Resource) implements Partial<OccupationalTherapy> {
  }
  return OccupationalTherapyClass
}

class OccupationalTherapyImpl extends OccupationalTherapyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OccupationalTherapy>) {
    super(arg, init)
    this.types.add(schema.OccupationalTherapy)
  }

  static readonly __mixins: Mixin[] = [OccupationalTherapyMixin, MedicalTherapyMixin];
}
OccupationalTherapyMixin.appliesTo = schema.OccupationalTherapy
OccupationalTherapyMixin.Class = OccupationalTherapyImpl

export const fromPointer = createFactory<OccupationalTherapy>([MedicalTherapyMixin, OccupationalTherapyMixin], { types: [schema.OccupationalTherapy] });
