import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface BroadcastChannel extends Schema.Intangible, RdfResource {
  broadcastChannelId: string;
  broadcastFrequency: Schema.BroadcastFrequencySpecification;
  broadcastFrequencyLiteral: string;
  broadcastServiceTier: string;
  genre: string;
  genreTerm: rdf.NamedNode;
  inBroadcastLineup: Schema.CableOrSatelliteService;
  providesBroadcastService: Schema.BroadcastService;
}

export default function BroadcastChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastChannelClass extends IntangibleMixin(Resource) implements BroadcastChannel {
    @property.literal()
    broadcastChannelId!: string;
    @property.resource()
    broadcastFrequency!: Schema.BroadcastFrequencySpecification;
    @property.literal({ path: schema.broadcastFrequency })
    broadcastFrequencyLiteral!: string;
    @property.literal()
    broadcastServiceTier!: string;
    @property.literal()
    genre!: string;
    @property({ path: schema.genre })
    genreTerm!: rdf.NamedNode;
    @property.resource()
    inBroadcastLineup!: Schema.CableOrSatelliteService;
    @property.resource()
    providesBroadcastService!: Schema.BroadcastService;
  }
  return BroadcastChannelClass
}

class BroadcastChannelImpl extends BroadcastChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BroadcastChannel>) {
    super(arg, init)
    this.types.add(schema.BroadcastChannel)
  }
}
BroadcastChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BroadcastChannel)
BroadcastChannelMixin.Class = BroadcastChannelImpl