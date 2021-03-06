import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReactActionMixin } from './ReactAction';

export interface EndorseAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, RdfResource<D> {
  endorsee: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function EndorseActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EndorseAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class EndorseActionClass extends ReactActionMixin(Resource) implements Partial<EndorseAction> {
    @property.resource()
    endorsee: Schema.Organization | Schema.Person | undefined;
  }
  return EndorseActionClass
}

class EndorseActionImpl extends EndorseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EndorseAction>) {
    super(arg, init)
    this.types.add(schema.EndorseAction)
  }

  static readonly __mixins: Mixin[] = [EndorseActionMixin, ReactActionMixin];
}
EndorseActionMixin.appliesTo = schema.EndorseAction
EndorseActionMixin.Class = EndorseActionImpl

export const fromPointer = createFactory<EndorseAction>([ReactActionMixin, EndorseActionMixin], { types: [schema.EndorseAction] });
