import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface PreOrderAction extends Schema.TradeAction, RdfResource {
}

export default function PreOrderActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PreOrderActionClass extends TradeActionMixin(Resource) implements PreOrderAction {
  }
  return PreOrderActionClass
}

class PreOrderActionImpl extends PreOrderActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PreOrderAction)
  }
}
PreOrderActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PreOrderAction)
PreOrderActionMixin.Class = PreOrderActionImpl
