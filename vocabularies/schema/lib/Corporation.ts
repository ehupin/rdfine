import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface Corporation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
  tickerSymbol: string | undefined;
}

export function CorporationMixin<Base extends Constructor>(Resource: Base): Constructor<Corporation> & Base {
  @namespace(schema)
  class CorporationClass extends OrganizationMixin(Resource) implements Partial<Corporation> {
    @property.literal()
    tickerSymbol: string | undefined;
  }
  return CorporationClass
}

class CorporationImpl extends CorporationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Corporation>) {
    super(arg, init)
    this.types.add(schema.Corporation)
  }

  static readonly __mixins: Mixin[] = [CorporationMixin, OrganizationMixin];
}
CorporationMixin.appliesTo = schema.Corporation
CorporationMixin.Class = CorporationImpl
