import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import TransferActionMixin from './TransferAction';

export interface SendAction extends Schema.TransferAction, RdfResource {
  deliveryMethod: Schema.DeliveryMethod;
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export default function SendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SendActionClass extends TransferActionMixin(Resource) implements SendAction {
    @property()
    deliveryMethod!: Schema.DeliveryMethod;
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return SendActionClass
}

class SendActionImpl extends SendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SendAction>) {
    super(arg, init)
    this.types.add(schema.SendAction)
  }
}
SendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SendAction)
SendActionMixin.Class = SendActionImpl
