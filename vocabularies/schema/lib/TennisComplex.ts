import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface TennisComplex<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function TennisComplexMixin<Base extends Constructor>(Resource: Base): Constructor<TennisComplex> & Base {
  @namespace(schema)
  class TennisComplexClass extends SportsActivityLocationMixin(Resource) implements TennisComplex {
  }
  return TennisComplexClass
}

class TennisComplexImpl extends TennisComplexMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TennisComplex>) {
    super(arg, init)
    this.types.add(schema.TennisComplex)
  }

  static readonly __mixins: Mixin[] = [TennisComplexMixin, SportsActivityLocationMixin];
}
TennisComplexMixin.appliesTo = schema.TennisComplex
TennisComplexMixin.Class = TennisComplexImpl
