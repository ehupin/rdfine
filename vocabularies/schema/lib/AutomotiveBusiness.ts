import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface AutomotiveBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function AutomotiveBusinessMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AutomotiveBusiness> & RdfResourceCore> & Base {
  @namespace(schema)
  class AutomotiveBusinessClass extends LocalBusinessMixin(Resource) implements Partial<AutomotiveBusiness> {
  }
  return AutomotiveBusinessClass
}

class AutomotiveBusinessImpl extends AutomotiveBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutomotiveBusiness>) {
    super(arg, init)
    this.types.add(schema.AutomotiveBusiness)
  }

  static readonly __mixins: Mixin[] = [AutomotiveBusinessMixin, LocalBusinessMixin];
}
AutomotiveBusinessMixin.appliesTo = schema.AutomotiveBusiness
AutomotiveBusinessMixin.Class = AutomotiveBusinessImpl

export const fromPointer = createFactory<AutomotiveBusiness>([LocalBusinessMixin, AutomotiveBusinessMixin], { types: [schema.AutomotiveBusiness] });
