import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface FoodEstablishmentReservation extends Schema.Reservation, RdfResource {
  endTime: Date;
  partySize: Schema.QuantitativeValue;
  partySizeLiteral: number;
  startTime: Date;
}

export default function FoodEstablishmentReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodEstablishmentReservationClass extends ReservationMixin(Resource) implements FoodEstablishmentReservation {
    @property.literal()
    endTime!: Date;
    @property.resource()
    partySize!: Schema.QuantitativeValue;
    @property.literal({ path: schema.partySize, type: Number })
    partySizeLiteral!: number;
    @property.literal()
    startTime!: Date;
  }
  return FoodEstablishmentReservationClass
}

class FoodEstablishmentReservationImpl extends FoodEstablishmentReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FoodEstablishmentReservation>) {
    super(arg, init)
    this.types.add(schema.FoodEstablishmentReservation)
  }
}
FoodEstablishmentReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodEstablishmentReservation)
FoodEstablishmentReservationMixin.Class = FoodEstablishmentReservationImpl