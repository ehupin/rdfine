import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface HousePainter extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function HousePainterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HousePainterClass extends HomeAndConstructionBusinessMixin(Resource) implements HousePainter {
  }
  return HousePainterClass
}

class HousePainterImpl extends HousePainterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HousePainter>) {
    super(arg, init)
    this.types.add(schema.HousePainter)
  }
}
HousePainterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HousePainter)
HousePainterMixin.Class = HousePainterImpl