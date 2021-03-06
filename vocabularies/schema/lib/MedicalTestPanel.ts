import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTestMixin } from './MedicalTest';

export interface MedicalTestPanel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTest<D>, RdfResource<D> {
  subTest: Schema.MedicalTest<D> | undefined;
}

export function MedicalTestPanelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalTestPanel> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalTestPanelClass extends MedicalTestMixin(Resource) implements Partial<MedicalTestPanel> {
    @property.resource()
    subTest: Schema.MedicalTest | undefined;
  }
  return MedicalTestPanelClass
}

class MedicalTestPanelImpl extends MedicalTestPanelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalTestPanel>) {
    super(arg, init)
    this.types.add(schema.MedicalTestPanel)
  }

  static readonly __mixins: Mixin[] = [MedicalTestPanelMixin, MedicalTestMixin];
}
MedicalTestPanelMixin.appliesTo = schema.MedicalTestPanel
MedicalTestPanelMixin.Class = MedicalTestPanelImpl

export const fromPointer = createFactory<MedicalTestPanel>([MedicalTestMixin, MedicalTestPanelMixin], { types: [schema.MedicalTestPanel] });
