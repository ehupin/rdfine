import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';
import RdfPropertyMixin from '@rdfine/rdf/Property';

export interface NegativePropertyAssertion extends Rdfs.Resource, RdfResource {
  assertionProperty: Rdf.Property;
  sourceIndividual: RDF.NamedNode;
  targetIndividual: RDF.NamedNode;
  targetValue: string;
}

export default function NegativePropertyAssertionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class NegativePropertyAssertionClass extends RdfsResourceMixin(Resource) implements NegativePropertyAssertion {
    @property.resource({ as: [RdfPropertyMixin] })
    assertionProperty!: Rdf.Property;
    @property()
    sourceIndividual!: RDF.NamedNode;
    @property()
    targetIndividual!: RDF.NamedNode;
    @property.literal()
    targetValue!: string;
  }
  return NegativePropertyAssertionClass
}

class NegativePropertyAssertionImpl extends NegativePropertyAssertionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NegativePropertyAssertion>) {
    super(arg, init)
    this.types.add(owl.NegativePropertyAssertion)
  }
}
NegativePropertyAssertionMixin.shouldApply = (r: RdfResource) => r.types.has(owl.NegativePropertyAssertion)
NegativePropertyAssertionMixin.Class = NegativePropertyAssertionImpl