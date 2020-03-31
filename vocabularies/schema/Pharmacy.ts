import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import MedicalOrganizationMixin from './MedicalOrganization';

export interface Pharmacy extends Schema.MedicalOrganization, RdfResource {
}

export default function PharmacyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PharmacyClass extends MedicalOrganizationMixin(Resource) implements Pharmacy {
  }
  return PharmacyClass
}

class PharmacyImpl extends PharmacyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Pharmacy>) {
    super(arg, init)
    this.types.add(schema.Pharmacy)
  }
}
PharmacyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Pharmacy)
PharmacyMixin.Class = PharmacyImpl
