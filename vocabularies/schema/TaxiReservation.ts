import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface TaxiReservation extends Schema.Reservation, RdfResource {
  partySize: Schema.QuantitativeValue;
  partySizeLiteral: number;
  pickupLocation: Schema.Place;
  pickupTime: Date;
}

export default function TaxiReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiReservationClass extends ReservationMixin(Resource) implements TaxiReservation {
    @property.resource()
    partySize!: Schema.QuantitativeValue;
    @property.literal({ path: schema.partySize, type: Number })
    partySizeLiteral!: number;
    @property.resource()
    pickupLocation!: Schema.Place;
    @property.literal()
    pickupTime!: Date;
  }
  return TaxiReservationClass
}

class TaxiReservationImpl extends TaxiReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TaxiReservation>) {
    super(arg, init)
    this.types.add(schema.TaxiReservation)
  }
}
TaxiReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TaxiReservation)
TaxiReservationMixin.Class = TaxiReservationImpl
