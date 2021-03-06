import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface RVPark<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function RVParkMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RVPark> & RdfResourceCore> & Base {
  @namespace(schema)
  class RVParkClass extends CivicStructureMixin(Resource) implements Partial<RVPark> {
  }
  return RVParkClass
}

class RVParkImpl extends RVParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RVPark>) {
    super(arg, init)
    this.types.add(schema.RVPark)
  }

  static readonly __mixins: Mixin[] = [RVParkMixin, CivicStructureMixin];
}
RVParkMixin.appliesTo = schema.RVPark
RVParkMixin.Class = RVParkImpl

export const fromPointer = createFactory<RVPark>([CivicStructureMixin, RVParkMixin], { types: [schema.RVPark] });
