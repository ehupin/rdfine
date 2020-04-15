import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Seat extends Schema.Intangible, RdfResource {
  seatingType: string;
  seatingTypeTerm: Schema.QualitativeValue;
  seatNumber: string;
  seatRow: string;
  seatSection: string;
}

export default function SeatMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SeatClass extends IntangibleMixin(Resource) implements Seat {
    @property.literal()
    seatingType!: string;
    @property({ path: schema.seatingType })
    seatingTypeTerm!: Schema.QualitativeValue;
    @property.literal()
    seatNumber!: string;
    @property.literal()
    seatRow!: string;
    @property.literal()
    seatSection!: string;
  }
  return SeatClass
}

class SeatImpl extends SeatMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Seat>) {
    super(arg, init)
    this.types.add(schema.Seat)
  }
}
SeatMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Seat)
SeatMixin.Class = SeatImpl