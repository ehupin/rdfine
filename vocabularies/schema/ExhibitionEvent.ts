import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface ExhibitionEvent extends Schema.Event, RdfResource {
}

export default function ExhibitionEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ExhibitionEventClass extends EventMixin(Resource) implements ExhibitionEvent {
  }
  return ExhibitionEventClass
}

class ExhibitionEventImpl extends ExhibitionEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ExhibitionEvent>) {
    super(arg, init)
    this.types.add(schema.ExhibitionEvent)
  }
}
ExhibitionEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ExhibitionEvent)
ExhibitionEventMixin.Class = ExhibitionEventImpl
