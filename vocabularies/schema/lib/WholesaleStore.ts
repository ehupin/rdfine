import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface WholesaleStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function WholesaleStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WholesaleStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class WholesaleStoreClass extends StoreMixin(Resource) implements Partial<WholesaleStore> {
  }
  return WholesaleStoreClass
}

class WholesaleStoreImpl extends WholesaleStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WholesaleStore>) {
    super(arg, init)
    this.types.add(schema.WholesaleStore)
  }

  static readonly __mixins: Mixin[] = [WholesaleStoreMixin, StoreMixin];
}
WholesaleStoreMixin.appliesTo = schema.WholesaleStore
WholesaleStoreMixin.Class = WholesaleStoreImpl

export const fromPointer = createFactory<WholesaleStore>([StoreMixin, WholesaleStoreMixin], { types: [schema.WholesaleStore] });
