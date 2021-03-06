import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PeriodicalMixin } from './Periodical';

export interface Newspaper<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Periodical<D>, RdfResource<D> {
}

export function NewspaperMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Newspaper> & RdfResourceCore> & Base {
  @namespace(schema)
  class NewspaperClass extends PeriodicalMixin(Resource) implements Partial<Newspaper> {
  }
  return NewspaperClass
}

class NewspaperImpl extends NewspaperMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Newspaper>) {
    super(arg, init)
    this.types.add(schema.Newspaper)
  }

  static readonly __mixins: Mixin[] = [NewspaperMixin, PeriodicalMixin];
}
NewspaperMixin.appliesTo = schema.Newspaper
NewspaperMixin.Class = NewspaperImpl

export const fromPointer = createFactory<Newspaper>([PeriodicalMixin, NewspaperMixin], { types: [schema.Newspaper] });
