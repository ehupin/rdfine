import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { InteractActionMixin } from './InteractAction';

export interface RegisterAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, RdfResource<D> {
}

export function RegisterActionMixin<Base extends Constructor>(Resource: Base): Constructor<RegisterAction> & Base {
  @namespace(schema)
  class RegisterActionClass extends InteractActionMixin(Resource) implements RegisterAction {
  }
  return RegisterActionClass
}

class RegisterActionImpl extends RegisterActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RegisterAction>) {
    super(arg, init)
    this.types.add(schema.RegisterAction)
  }

  static readonly __mixins: Mixin[] = [RegisterActionMixin, InteractActionMixin];
}
RegisterActionMixin.appliesTo = schema.RegisterAction
RegisterActionMixin.Class = RegisterActionImpl
