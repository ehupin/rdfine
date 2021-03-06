import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface AutoWash<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, RdfResource<D> {
}

export function AutoWashMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AutoWash> & RdfResourceCore> & Base {
  @namespace(schema)
  class AutoWashClass extends AutomotiveBusinessMixin(Resource) implements Partial<AutoWash> {
  }
  return AutoWashClass
}

class AutoWashImpl extends AutoWashMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoWash>) {
    super(arg, init)
    this.types.add(schema.AutoWash)
  }

  static readonly __mixins: Mixin[] = [AutoWashMixin, AutomotiveBusinessMixin];
}
AutoWashMixin.appliesTo = schema.AutoWash
AutoWashMixin.Class = AutoWashImpl

export const fromPointer = createFactory<AutoWash>([AutomotiveBusinessMixin, AutoWashMixin], { types: [schema.AutoWash] });
