import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import PriceSpecificationMixin from './PriceSpecification';

export interface UnitPriceSpecification extends Schema.PriceSpecification, RdfResource {
  billingIncrement: number;
  priceType: string;
  referenceQuantity: Schema.QuantitativeValue;
  unitCode: string;
  unitCodeTerm: rdf.NamedNode;
  unitText: string;
}

export default function UnitPriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UnitPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements UnitPriceSpecification {
    @property.literal({ type: Number })
    billingIncrement!: number;
    @property.literal()
    priceType!: string;
    @property.resource()
    referenceQuantity!: Schema.QuantitativeValue;
    @property.literal()
    unitCode!: string;
    @property({ path: schema.unitCode })
    unitCodeTerm!: rdf.NamedNode;
    @property.literal()
    unitText!: string;
  }
  return UnitPriceSpecificationClass
}

class UnitPriceSpecificationImpl extends UnitPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UnitPriceSpecification>) {
    super(arg, init)
    this.types.add(schema.UnitPriceSpecification)
  }
}
UnitPriceSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UnitPriceSpecification)
UnitPriceSpecificationMixin.Class = UnitPriceSpecificationImpl
