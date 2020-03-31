import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import InsertActionMixin from './InsertAction';

export interface PrependAction extends Schema.InsertAction, RdfResource {
}

export default function PrependActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PrependActionClass extends InsertActionMixin(Resource) implements PrependAction {
  }
  return PrependActionClass
}

class PrependActionImpl extends PrependActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PrependAction>) {
    super(arg, init)
    this.types.add(schema.PrependAction)
  }
}
PrependActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PrependAction)
PrependActionMixin.Class = PrependActionImpl
