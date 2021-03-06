import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';
import { SeriesMixin } from './Series';

export interface EventSeries<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, Schema.Series<D>, RdfResource<D> {
}

export function EventSeriesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EventSeries> & RdfResourceCore> & Base {
  @namespace(schema)
  class EventSeriesClass extends SeriesMixin(EventMixin(Resource)) implements Partial<EventSeries> {
  }
  return EventSeriesClass
}

class EventSeriesImpl extends EventSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EventSeries>) {
    super(arg, init)
    this.types.add(schema.EventSeries)
  }

  static readonly __mixins: Mixin[] = [EventSeriesMixin, EventMixin, SeriesMixin];
}
EventSeriesMixin.appliesTo = schema.EventSeries
EventSeriesMixin.Class = EventSeriesImpl

export const fromPointer = createFactory<EventSeries>([SeriesMixin, EventMixin, EventSeriesMixin], { types: [schema.EventSeries] });
