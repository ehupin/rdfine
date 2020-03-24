import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ProgramMembership extends Schema.Intangible, RdfResource {
  hostingOrganization: Schema.Organization;
  member: Schema.Organization | Schema.Person;
  members: Schema.Organization | Schema.Person;
  membershipNumber: string;
  programName: string;
}

export default function ProgramMembershipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProgramMembershipClass extends IntangibleMixin(Resource) implements ProgramMembership {
    @property.resource()
    hostingOrganization!: Schema.Organization;
    @property.resource()
    member!: Schema.Organization | Schema.Person;
    @property.resource()
    members!: Schema.Organization | Schema.Person;
    @property.literal()
    membershipNumber!: string;
    @property.literal()
    programName!: string;
  }
  return ProgramMembershipClass
}

class ProgramMembershipImpl extends ProgramMembershipMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ProgramMembership)
  }
}
ProgramMembershipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProgramMembership)
ProgramMembershipMixin.Class = ProgramMembershipImpl
