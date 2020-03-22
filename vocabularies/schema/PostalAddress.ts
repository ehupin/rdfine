import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ContactPointMixin from './ContactPoint';

export interface PostalAddress extends Schema.ContactPoint, RdfResource {
  addressCountry: Schema.Country;
  addressCountryLiteral: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  postOfficeBoxNumber: string;
  streetAddress: string;
}

export default function PostalAddressMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PostalAddressClass extends ContactPointMixin(Resource) implements PostalAddress {
    @property.resource()
    addressCountry!: Schema.Country;
    @property.literal({ path: schema.addressCountry })
    addressCountryLiteral!: string;
    @property.literal()
    addressLocality!: string;
    @property.literal()
    addressRegion!: string;
    @property.literal()
    postalCode!: string;
    @property.literal()
    postOfficeBoxNumber!: string;
    @property.literal()
    streetAddress!: string;
  }
  return PostalAddressClass
}

class PostalAddressImpl extends PostalAddressMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PostalAddress)
  }
}
PostalAddressMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PostalAddress)
PostalAddressMixin.Class = PostalAddressImpl
