import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';
import { ItemListMixin } from './ItemList';
import { ListItemMixin } from './ListItem';

export interface HowToSection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.ItemList<D>, Schema.ListItem<D>, RdfResource<D> {
  steps: Array<Schema.CreativeWork<D> | Schema.ItemList<D>>;
  stepsLiteral: Array<string>;
}

export function HowToSectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HowToSection> & RdfResourceCore> & Base {
  @namespace(schema)
  class HowToSectionClass extends ListItemMixin(ItemListMixin(CreativeWorkMixin(Resource))) implements Partial<HowToSection> {
    @property.resource({ values: 'array' })
    steps!: Array<Schema.CreativeWork | Schema.ItemList>;
    @property.literal({ path: schema.steps, values: 'array' })
    stepsLiteral!: Array<string>;
  }
  return HowToSectionClass
}

class HowToSectionImpl extends HowToSectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToSection>) {
    super(arg, init)
    this.types.add(schema.HowToSection)
  }

  static readonly __mixins: Mixin[] = [HowToSectionMixin, CreativeWorkMixin, ItemListMixin, ListItemMixin];
}
HowToSectionMixin.appliesTo = schema.HowToSection
HowToSectionMixin.Class = HowToSectionImpl

export const fromPointer = createFactory<HowToSection>([ListItemMixin, ItemListMixin, CreativeWorkMixin, HowToSectionMixin], { types: [schema.HowToSection] });
