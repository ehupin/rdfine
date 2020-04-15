import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface MediaObject extends Schema.CreativeWork, RdfResource {
  associatedArticle: Schema.NewsArticle;
  bitrate: string;
  contentSize: string;
  contentUrl: rdf.NamedNode;
  duration: Schema.Duration;
  embedUrl: rdf.NamedNode;
  encodesCreativeWork: Schema.CreativeWork;
  encodingFormat: string;
  encodingFormatTerm: rdf.NamedNode;
  endTime: Date;
  height: Schema.Distance | Schema.QuantitativeValue;
  playerType: string;
  productionCompany: Schema.Organization;
  regionsAllowed: Schema.Place;
  requiresSubscription: Schema.MediaSubscription;
  requiresSubscriptionLiteral: boolean;
  startTime: Date;
  uploadDate: Date;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export default function MediaObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaObjectClass extends CreativeWorkMixin(Resource) implements MediaObject {
    @property.resource()
    associatedArticle!: Schema.NewsArticle;
    @property.literal()
    bitrate!: string;
    @property.literal()
    contentSize!: string;
    @property()
    contentUrl!: rdf.NamedNode;
    @property.resource()
    duration!: Schema.Duration;
    @property()
    embedUrl!: rdf.NamedNode;
    @property.resource()
    encodesCreativeWork!: Schema.CreativeWork;
    @property.literal()
    encodingFormat!: string;
    @property({ path: schema.encodingFormat })
    encodingFormatTerm!: rdf.NamedNode;
    @property.literal()
    endTime!: Date;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property.literal()
    playerType!: string;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.resource()
    regionsAllowed!: Schema.Place;
    @property.resource()
    requiresSubscription!: Schema.MediaSubscription;
    @property.literal({ path: schema.requiresSubscription, type: Boolean })
    requiresSubscriptionLiteral!: boolean;
    @property.literal()
    startTime!: Date;
    @property.literal()
    uploadDate!: Date;
    @property.resource()
    width!: Schema.Distance | Schema.QuantitativeValue;
  }
  return MediaObjectClass
}

class MediaObjectImpl extends MediaObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MediaObject>) {
    super(arg, init)
    this.types.add(schema.MediaObject)
  }
}
MediaObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MediaObject)
MediaObjectMixin.Class = MediaObjectImpl