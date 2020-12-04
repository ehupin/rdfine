import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CommunicateActionMixin } from './CommunicateAction';

export interface CommentAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, RdfResource<D> {
  resultComment: Schema.Comment<D> | undefined;
}

export function CommentActionMixin<Base extends Constructor>(Resource: Base): Constructor<CommentAction> & Base {
  @namespace(schema)
  class CommentActionClass extends CommunicateActionMixin(Resource) implements CommentAction {
    @property.resource()
    resultComment: Schema.Comment | undefined;
  }
  return CommentActionClass
}

class CommentActionImpl extends CommentActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CommentAction>) {
    super(arg, init)
    this.types.add(schema.CommentAction)
  }

  static readonly __mixins: Mixin[] = [CommentActionMixin, CommunicateActionMixin];
}
CommentActionMixin.appliesTo = schema.CommentAction
CommentActionMixin.Class = CommentActionImpl
