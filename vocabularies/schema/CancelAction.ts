import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import PlanActionMixin from './PlanAction';

export interface CancelAction extends Schema.PlanAction, RdfResource {
}

export default function CancelActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CancelActionClass extends PlanActionMixin(Resource) implements CancelAction {
  }
  return CancelActionClass
}

class CancelActionImpl extends CancelActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CancelAction>) {
    super(arg, init)
    this.types.add(schema.CancelAction)
  }
}
CancelActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CancelAction)
CancelActionMixin.Class = CancelActionImpl
