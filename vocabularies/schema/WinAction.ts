import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import AchieveActionMixin from './AchieveAction';

export interface WinAction extends Schema.AchieveAction, RdfResource {
  loser: Schema.Person;
}

export default function WinActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WinActionClass extends AchieveActionMixin(Resource) implements WinAction {
    @property.resource()
    loser!: Schema.Person;
  }
  return WinActionClass
}

class WinActionImpl extends WinActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WinAction>) {
    super(arg, init)
    this.types.add(schema.WinAction)
  }
}
WinActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WinAction)
WinActionMixin.Class = WinActionImpl