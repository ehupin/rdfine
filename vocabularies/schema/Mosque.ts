import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import PlaceOfWorshipMixin from './PlaceOfWorship';

export interface Mosque extends Schema.PlaceOfWorship, RdfResource {
}

export default function MosqueMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MosqueClass extends PlaceOfWorshipMixin(Resource) implements Mosque {
  }
  return MosqueClass
}

class MosqueImpl extends MosqueMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Mosque>) {
    super(arg, init)
    this.types.add(schema.Mosque)
  }
}
MosqueMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Mosque)
MosqueMixin.Class = MosqueImpl
