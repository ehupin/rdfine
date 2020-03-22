import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface SocialEvent extends Schema.Event, RdfResource {
}

export default function SocialEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SocialEventClass extends EventMixin(Resource) implements SocialEvent {
  }
  return SocialEventClass
}

class SocialEventImpl extends SocialEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SocialEvent)
  }
}
SocialEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SocialEvent)
SocialEventMixin.Class = SocialEventImpl
