import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface AutoDealer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, RdfResource<D> {
}

export function AutoDealerMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AutoDealer> & RdfResourceCore> & Base {
  @namespace(schema)
  class AutoDealerClass extends AutomotiveBusinessMixin(Resource) implements Partial<AutoDealer> {
  }
  return AutoDealerClass
}

class AutoDealerImpl extends AutoDealerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoDealer>) {
    super(arg, init)
    this.types.add(schema.AutoDealer)
  }

  static readonly __mixins: Mixin[] = [AutoDealerMixin, AutomotiveBusinessMixin];
}
AutoDealerMixin.appliesTo = schema.AutoDealer
AutoDealerMixin.Class = AutoDealerImpl

export const fromPointer = createFactory<AutoDealer>([AutomotiveBusinessMixin, AutoDealerMixin], { types: [schema.AutoDealer] });
