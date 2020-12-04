import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';
import { StoreMixin } from './Store';

export interface AutoPartsStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, Schema.Store<D>, RdfResource<D> {
}

export function AutoPartsStoreMixin<Base extends Constructor>(Resource: Base): Constructor<AutoPartsStore> & Base {
  @namespace(schema)
  class AutoPartsStoreClass extends StoreMixin(AutomotiveBusinessMixin(Resource)) implements AutoPartsStore {
  }
  return AutoPartsStoreClass
}

class AutoPartsStoreImpl extends AutoPartsStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoPartsStore>) {
    super(arg, init)
    this.types.add(schema.AutoPartsStore)
  }

  static readonly __mixins: Mixin[] = [AutoPartsStoreMixin, AutomotiveBusinessMixin, StoreMixin];
}
AutoPartsStoreMixin.appliesTo = schema.AutoPartsStore
AutoPartsStoreMixin.Class = AutoPartsStoreImpl
