import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface DanceEvent extends Schema.Event, RdfResource {
}

export default function DanceEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DanceEventClass extends EventMixin(Resource) implements DanceEvent {
  }
  return DanceEventClass
}

class DanceEventImpl extends DanceEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DanceEvent>) {
    super(arg, init)
    this.types.add(schema.DanceEvent)
  }
}
DanceEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DanceEvent)
DanceEventMixin.Class = DanceEventImpl