import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';
import ShapeMixin from './Shape';

export interface Rule extends Rdfs.Resource, RdfResource {
  condition: Sh.Shape;
}

export default function RuleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class RuleClass extends RdfsResourceMixin(Resource) implements Rule {
    @property.resource({ as: [ShapeMixin] })
    condition!: Sh.Shape;
  }
  return RuleClass
}

class RuleImpl extends RuleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Rule>) {
    super(arg, init)
    this.types.add(sh.Rule)
  }
}
RuleMixin.shouldApply = (r: RdfResource) => r.types.has(sh.Rule)
RuleMixin.Class = RuleImpl
