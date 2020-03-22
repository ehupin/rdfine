import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ControlActionMixin from './ControlAction';

export interface ActivateAction extends Schema.ControlAction, RdfResource {
}

export default function ActivateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ActivateActionClass extends ControlActionMixin(Resource) implements ActivateAction {
  }
  return ActivateActionClass
}

class ActivateActionImpl extends ActivateActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ActivateAction)
  }
}
ActivateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ActivateAction)
ActivateActionMixin.Class = ActivateActionImpl
