import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface Waterfall extends Schema.BodyOfWater, RdfResource {
}

export default function WaterfallMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WaterfallClass extends BodyOfWaterMixin(Resource) implements Waterfall {
  }
  return WaterfallClass
}

class WaterfallImpl extends WaterfallMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Waterfall)
  }
}
WaterfallMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Waterfall)
WaterfallMixin.Class = WaterfallImpl
