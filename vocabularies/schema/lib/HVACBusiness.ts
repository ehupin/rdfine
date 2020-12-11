import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface HVACBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, RdfResource<D> {
}

export function HVACBusinessMixin<Base extends Constructor>(Resource: Base): Constructor<HVACBusiness> & Base {
  @namespace(schema)
  class HVACBusinessClass extends HomeAndConstructionBusinessMixin(Resource) implements Partial<HVACBusiness> {
  }
  return HVACBusinessClass
}

class HVACBusinessImpl extends HVACBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HVACBusiness>) {
    super(arg, init)
    this.types.add(schema.HVACBusiness)
  }

  static readonly __mixins: Mixin[] = [HVACBusinessMixin, HomeAndConstructionBusinessMixin];
}
HVACBusinessMixin.appliesTo = schema.HVACBusiness
HVACBusinessMixin.Class = HVACBusinessImpl
