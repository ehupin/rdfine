import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';
import { ParameterizableMixin } from './Parameterizable';

export interface TargetType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, Sh.Parameterizable<D>, RdfResource<D> {
}

export function TargetTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TargetType> & RdfResourceCore> & Base {
  @namespace(sh)
  class TargetTypeClass extends ParameterizableMixin(RdfsClassMixin(Resource)) implements Partial<TargetType> {
  }
  return TargetTypeClass
}

class TargetTypeImpl extends TargetTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TargetType>) {
    super(arg, init)
    this.types.add(sh.TargetType)
  }

  static readonly __mixins: Mixin[] = [TargetTypeMixin, RdfsClassMixin, ParameterizableMixin];
}
TargetTypeMixin.appliesTo = sh.TargetType
TargetTypeMixin.Class = TargetTypeImpl

export const fromPointer = createFactory<TargetType>([ParameterizableMixin, RdfsClassMixin, TargetTypeMixin], { types: [sh.TargetType] });
