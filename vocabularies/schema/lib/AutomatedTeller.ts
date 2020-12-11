import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialServiceMixin } from './FinancialService';

export interface AutomatedTeller<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialService<D>, RdfResource<D> {
}

export function AutomatedTellerMixin<Base extends Constructor>(Resource: Base): Constructor<AutomatedTeller> & Base {
  @namespace(schema)
  class AutomatedTellerClass extends FinancialServiceMixin(Resource) implements Partial<AutomatedTeller> {
  }
  return AutomatedTellerClass
}

class AutomatedTellerImpl extends AutomatedTellerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutomatedTeller>) {
    super(arg, init)
    this.types.add(schema.AutomatedTeller)
  }

  static readonly __mixins: Mixin[] = [AutomatedTellerMixin, FinancialServiceMixin];
}
AutomatedTellerMixin.appliesTo = schema.AutomatedTeller
AutomatedTellerMixin.Class = AutomatedTellerImpl
