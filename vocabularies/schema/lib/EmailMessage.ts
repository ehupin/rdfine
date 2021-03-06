import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MessageMixin } from './Message';

export interface EmailMessage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Message<D>, RdfResource<D> {
}

export function EmailMessageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EmailMessage> & RdfResourceCore> & Base {
  @namespace(schema)
  class EmailMessageClass extends MessageMixin(Resource) implements Partial<EmailMessage> {
  }
  return EmailMessageClass
}

class EmailMessageImpl extends EmailMessageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmailMessage>) {
    super(arg, init)
    this.types.add(schema.EmailMessage)
  }

  static readonly __mixins: Mixin[] = [EmailMessageMixin, MessageMixin];
}
EmailMessageMixin.appliesTo = schema.EmailMessage
EmailMessageMixin.Class = EmailMessageImpl

export const fromPointer = createFactory<EmailMessage>([MessageMixin, EmailMessageMixin], { types: [schema.EmailMessage] });
