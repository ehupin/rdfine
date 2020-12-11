import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface Distillery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function DistilleryMixin<Base extends Constructor>(Resource: Base): Constructor<Distillery> & Base {
  @namespace(schema)
  class DistilleryClass extends FoodEstablishmentMixin(Resource) implements Partial<Distillery> {
  }
  return DistilleryClass
}

class DistilleryImpl extends DistilleryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Distillery>) {
    super(arg, init)
    this.types.add(schema.Distillery)
  }

  static readonly __mixins: Mixin[] = [DistilleryMixin, FoodEstablishmentMixin];
}
DistilleryMixin.appliesTo = schema.Distillery
DistilleryMixin.Class = DistilleryImpl
