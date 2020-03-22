import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface Beach extends Schema.CivicStructure, RdfResource {
}

export default function BeachMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BeachClass extends CivicStructureMixin(Resource) implements Beach {
  }
  return BeachClass
}

class BeachImpl extends BeachMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Beach)
  }
}
BeachMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Beach)
BeachMixin.Class = BeachImpl
