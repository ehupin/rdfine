import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { InsertActionMixin } from './InsertAction';

export interface AppendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InsertAction<D>, RdfResource<D> {
}

export function AppendActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AppendAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class AppendActionClass extends InsertActionMixin(Resource) implements Partial<AppendAction> {
  }
  return AppendActionClass
}

class AppendActionImpl extends AppendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AppendAction>) {
    super(arg, init)
    this.types.add(schema.AppendAction)
  }

  static readonly __mixins: Mixin[] = [AppendActionMixin, InsertActionMixin];
}
AppendActionMixin.appliesTo = schema.AppendAction
AppendActionMixin.Class = AppendActionImpl

export const fromPointer = createFactory<AppendAction>([InsertActionMixin, AppendActionMixin], { types: [schema.AppendAction] });
