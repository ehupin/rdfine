import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface TireShop extends Schema.Store, RdfResource {
}

export default function TireShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TireShopClass extends StoreMixin(Resource) implements TireShop {
  }
  return TireShopClass
}

class TireShopImpl extends TireShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TireShop>) {
    super(arg, init)
    this.types.add(schema.TireShop)
  }
}
TireShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TireShop)
TireShopMixin.Class = TireShopImpl