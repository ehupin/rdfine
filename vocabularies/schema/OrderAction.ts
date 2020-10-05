import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TradeActionMixin } from './TradeAction';

export interface OrderAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, RdfResource<D> {
  deliveryMethod: Schema.DeliveryMethod | undefined;
}

export function OrderActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrderActionClass extends TradeActionMixin(Resource) implements OrderAction {
    @property()
    deliveryMethod: Schema.DeliveryMethod | undefined;
  }
  return OrderActionClass
}

class OrderActionImpl extends OrderActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderAction>) {
    super(arg, init)
    this.types.add(schema.OrderAction)
  }

  static readonly __mixins: Mixin[] = [OrderActionMixin, TradeActionMixin];
}
OrderActionMixin.appliesTo = schema.OrderAction
OrderActionMixin.Class = OrderActionImpl
