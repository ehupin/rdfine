import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { NewsArticleMixin } from './NewsArticle';

export interface BackgroundNewsArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.NewsArticle<D>, RdfResource<D> {
}

export function BackgroundNewsArticleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BackgroundNewsArticle> & RdfResourceCore> & Base {
  @namespace(schema)
  class BackgroundNewsArticleClass extends NewsArticleMixin(Resource) implements Partial<BackgroundNewsArticle> {
  }
  return BackgroundNewsArticleClass
}

class BackgroundNewsArticleImpl extends BackgroundNewsArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BackgroundNewsArticle>) {
    super(arg, init)
    this.types.add(schema.BackgroundNewsArticle)
  }

  static readonly __mixins: Mixin[] = [BackgroundNewsArticleMixin, NewsArticleMixin];
}
BackgroundNewsArticleMixin.appliesTo = schema.BackgroundNewsArticle
BackgroundNewsArticleMixin.Class = BackgroundNewsArticleImpl

export const fromPointer = createFactory<BackgroundNewsArticle>([NewsArticleMixin, BackgroundNewsArticleMixin], { types: [schema.BackgroundNewsArticle] });
