import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface WebPageElement extends Schema.CreativeWork, RdfResource {
  cssSelector: string;
  xpath: string;
}

export default function WebPageElementMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebPageElementClass extends CreativeWorkMixin(Resource) implements WebPageElement {
    @property.literal()
    cssSelector!: string;
    @property.literal()
    xpath!: string;
  }
  return WebPageElementClass
}

class WebPageElementImpl extends WebPageElementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebPageElement>) {
    super(arg, init)
    this.types.add(schema.WebPageElement)
  }
}
WebPageElementMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebPageElement)
WebPageElementMixin.Class = WebPageElementImpl
