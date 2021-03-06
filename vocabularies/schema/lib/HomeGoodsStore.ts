import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface HomeGoodsStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function HomeGoodsStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HomeGoodsStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class HomeGoodsStoreClass extends StoreMixin(Resource) implements Partial<HomeGoodsStore> {
  }
  return HomeGoodsStoreClass
}

class HomeGoodsStoreImpl extends HomeGoodsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HomeGoodsStore>) {
    super(arg, init)
    this.types.add(schema.HomeGoodsStore)
  }

  static readonly __mixins: Mixin[] = [HomeGoodsStoreMixin, StoreMixin];
}
HomeGoodsStoreMixin.appliesTo = schema.HomeGoodsStore
HomeGoodsStoreMixin.Class = HomeGoodsStoreImpl

export const fromPointer = createFactory<HomeGoodsStore>([StoreMixin, HomeGoodsStoreMixin], { types: [schema.HomeGoodsStore] });
