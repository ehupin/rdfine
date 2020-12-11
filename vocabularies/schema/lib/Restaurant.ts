import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface Restaurant<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function RestaurantMixin<Base extends Constructor>(Resource: Base): Constructor<Restaurant> & Base {
  @namespace(schema)
  class RestaurantClass extends FoodEstablishmentMixin(Resource) implements Partial<Restaurant> {
  }
  return RestaurantClass
}

class RestaurantImpl extends RestaurantMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Restaurant>) {
    super(arg, init)
    this.types.add(schema.Restaurant)
  }

  static readonly __mixins: Mixin[] = [RestaurantMixin, FoodEstablishmentMixin];
}
RestaurantMixin.appliesTo = schema.Restaurant
RestaurantMixin.Class = RestaurantImpl
