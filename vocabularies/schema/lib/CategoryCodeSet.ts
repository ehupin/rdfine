import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DefinedTermSetMixin } from './DefinedTermSet';

export interface CategoryCodeSet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DefinedTermSet<D>, RdfResource<D> {
  hasCategoryCode: Schema.CategoryCode<D> | undefined;
}

export function CategoryCodeSetMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CategoryCodeSet> & RdfResourceCore> & Base {
  @namespace(schema)
  class CategoryCodeSetClass extends DefinedTermSetMixin(Resource) implements Partial<CategoryCodeSet> {
    @property.resource()
    hasCategoryCode: Schema.CategoryCode | undefined;
  }
  return CategoryCodeSetClass
}

class CategoryCodeSetImpl extends CategoryCodeSetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CategoryCodeSet>) {
    super(arg, init)
    this.types.add(schema.CategoryCodeSet)
  }

  static readonly __mixins: Mixin[] = [CategoryCodeSetMixin, DefinedTermSetMixin];
}
CategoryCodeSetMixin.appliesTo = schema.CategoryCodeSet
CategoryCodeSetMixin.Class = CategoryCodeSetImpl

export const fromPointer = createFactory<CategoryCodeSet>([DefinedTermSetMixin, CategoryCodeSetMixin], { types: [schema.CategoryCodeSet] });
