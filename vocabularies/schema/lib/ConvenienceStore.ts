import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface ConvenienceStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function ConvenienceStoreMixin<Base extends Constructor>(Resource: Base): Constructor<ConvenienceStore> & Base {
  @namespace(schema)
  class ConvenienceStoreClass extends StoreMixin(Resource) implements Partial<ConvenienceStore> {
  }
  return ConvenienceStoreClass
}

class ConvenienceStoreImpl extends ConvenienceStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConvenienceStore>) {
    super(arg, init)
    this.types.add(schema.ConvenienceStore)
  }

  static readonly __mixins: Mixin[] = [ConvenienceStoreMixin, StoreMixin];
}
ConvenienceStoreMixin.appliesTo = schema.ConvenienceStore
ConvenienceStoreMixin.Class = ConvenienceStoreImpl
