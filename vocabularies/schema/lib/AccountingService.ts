import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FinancialServiceMixin } from './FinancialService';

export interface AccountingService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialService<D>, RdfResource<D> {
}

export function AccountingServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AccountingService> & RdfResourceCore> & Base {
  @namespace(schema)
  class AccountingServiceClass extends FinancialServiceMixin(Resource) implements Partial<AccountingService> {
  }
  return AccountingServiceClass
}

class AccountingServiceImpl extends AccountingServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AccountingService>) {
    super(arg, init)
    this.types.add(schema.AccountingService)
  }

  static readonly __mixins: Mixin[] = [AccountingServiceMixin, FinancialServiceMixin];
}
AccountingServiceMixin.appliesTo = schema.AccountingService
AccountingServiceMixin.Class = AccountingServiceImpl

export const fromPointer = createFactory<AccountingService>([FinancialServiceMixin, AccountingServiceMixin], { types: [schema.AccountingService] });
