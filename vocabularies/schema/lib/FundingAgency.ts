import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ProjectMixin } from './Project';

export interface FundingAgency<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Project<D>, RdfResource<D> {
}

export function FundingAgencyMixin<Base extends Constructor>(Resource: Base): Constructor<FundingAgency> & Base {
  @namespace(schema)
  class FundingAgencyClass extends ProjectMixin(Resource) implements FundingAgency {
  }
  return FundingAgencyClass
}

class FundingAgencyImpl extends FundingAgencyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FundingAgency>) {
    super(arg, init)
    this.types.add(schema.FundingAgency)
  }

  static readonly __mixins: Mixin[] = [FundingAgencyMixin, ProjectMixin];
}
FundingAgencyMixin.appliesTo = schema.FundingAgency
FundingAgencyMixin.Class = FundingAgencyImpl
