import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface LegalService extends Schema.LocalBusiness, RdfResource {
}

export default function LegalServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LegalServiceClass extends LocalBusinessMixin(Resource) implements LegalService {
  }
  return LegalServiceClass
}

class LegalServiceImpl extends LegalServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LegalService>) {
    super(arg, init)
    this.types.add(schema.LegalService)
  }
}
LegalServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LegalService)
LegalServiceMixin.Class = LegalServiceImpl
