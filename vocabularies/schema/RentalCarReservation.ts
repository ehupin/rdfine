import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface RentalCarReservation extends Schema.Reservation, RdfResource {
  dropoffLocation: Schema.Place;
  dropoffTime: Date;
  pickupLocation: Schema.Place;
  pickupTime: Date;
}

export default function RentalCarReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RentalCarReservationClass extends ReservationMixin(Resource) implements RentalCarReservation {
    @property.resource()
    dropoffLocation!: Schema.Place;
    @property.literal()
    dropoffTime!: Date;
    @property.resource()
    pickupLocation!: Schema.Place;
    @property.literal()
    pickupTime!: Date;
  }
  return RentalCarReservationClass
}

class RentalCarReservationImpl extends RentalCarReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RentalCarReservation>) {
    super(arg, init)
    this.types.add(schema.RentalCarReservation)
  }
}
RentalCarReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RentalCarReservation)
RentalCarReservationMixin.Class = RentalCarReservationImpl