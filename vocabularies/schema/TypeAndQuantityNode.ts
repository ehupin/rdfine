import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface TypeAndQuantityNode extends Schema.StructuredValue, RdfResource {
  amountOfThisGood: number;
  businessFunction: Schema.BusinessFunction;
  typeOfGood: Schema.Product | Schema.Service;
  unitCode: string;
  unitCodeTerm: rdf.NamedNode;
  unitText: string;
}

export default function TypeAndQuantityNodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TypeAndQuantityNodeClass extends StructuredValueMixin(Resource) implements TypeAndQuantityNode {
    @property.literal({ type: Number })
    amountOfThisGood!: number;
    @property()
    businessFunction!: Schema.BusinessFunction;
    @property.resource()
    typeOfGood!: Schema.Product | Schema.Service;
    @property.literal()
    unitCode!: string;
    @property({ path: schema.unitCode })
    unitCodeTerm!: rdf.NamedNode;
    @property.literal()
    unitText!: string;
  }
  return TypeAndQuantityNodeClass
}

class TypeAndQuantityNodeImpl extends TypeAndQuantityNodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TypeAndQuantityNode>) {
    super(arg, init)
    this.types.add(schema.TypeAndQuantityNode)
  }
}
TypeAndQuantityNodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TypeAndQuantityNode)
TypeAndQuantityNodeMixin.Class = TypeAndQuantityNodeImpl
