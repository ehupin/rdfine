import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Atlas<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function AtlasMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AtlasClass extends CreativeWorkMixin(Resource) implements Atlas {
  }
  return AtlasClass
}

class AtlasImpl extends AtlasMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Atlas>) {
    super(arg, init)
    this.types.add(schema.Atlas)
  }

  static readonly __mixins: Mixin[] = [AtlasMixin, CreativeWorkMixin];
}
AtlasMixin.appliesTo = schema.Atlas
AtlasMixin.Class = AtlasImpl
