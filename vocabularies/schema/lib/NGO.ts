import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface NGO<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function NGOMixin<Base extends Constructor>(Resource: Base): Constructor<NGO> & Base {
  @namespace(schema)
  class NGOClass extends OrganizationMixin(Resource) implements Partial<NGO> {
  }
  return NGOClass
}

class NGOImpl extends NGOMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NGO>) {
    super(arg, init)
    this.types.add(schema.NGO)
  }

  static readonly __mixins: Mixin[] = [NGOMixin, OrganizationMixin];
}
NGOMixin.appliesTo = schema.NGO
NGOMixin.Class = NGOImpl
