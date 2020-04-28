import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';

export interface Target extends Rdfs.Resource, RdfResource {
}

export default function TargetMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class TargetClass extends RdfsResourceMixin(Resource) implements Target {
  }
  return TargetClass
}

class TargetImpl extends TargetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Target>) {
    super(arg, init)
    this.types.add(sh.Target)
  }
}
TargetMixin.shouldApply = (r: RdfResource) => r.types.has(sh.Target)
TargetMixin.Class = TargetImpl
