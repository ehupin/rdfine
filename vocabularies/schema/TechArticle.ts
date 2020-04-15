import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ArticleMixin from './Article';

export interface TechArticle extends Schema.Article, RdfResource {
  dependencies: string;
  proficiencyLevel: string;
}

export default function TechArticleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TechArticleClass extends ArticleMixin(Resource) implements TechArticle {
    @property.literal()
    dependencies!: string;
    @property.literal()
    proficiencyLevel!: string;
  }
  return TechArticleClass
}

class TechArticleImpl extends TechArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TechArticle>) {
    super(arg, init)
    this.types.add(schema.TechArticle)
  }
}
TechArticleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TechArticle)
TechArticleMixin.Class = TechArticleImpl