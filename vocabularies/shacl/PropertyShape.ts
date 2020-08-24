import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';
import { ShapeMixin } from './Shape';

export interface PropertyShape extends Sh.Shape, RdfResource {
  defaultValue: RDF.Term;
  description: RDF.Term;
  group: Sh.PropertyGroup;
  languageIn: Array<string>;
  name: RDF.Term;
  path: Rdfs.Resource | Array<Rdfs.Resource>;
}

export function PropertyShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PropertyShapeClass extends ShapeMixin(Resource) implements PropertyShape {
    @property()
    defaultValue!: RDF.Term;
    @property()
    description!: RDF.Term;
    @property.resource({ implicitTypes: [sh.PropertyGroup] })
    group!: Sh.PropertyGroup;
    @property.literal({ values: 'list' })
    languageIn!: Array<string>;
    @property()
    name!: RDF.Term;
    @property.resource({ values: ['list', 'single'], as: [Rdfs.ResourceMixin] })
    path!: Rdfs.Resource | Array<Rdfs.Resource>;
  }
  return PropertyShapeClass
}

class PropertyShapeImpl extends PropertyShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyShape>) {
    super(arg, init)
    this.types.add(sh.PropertyShape)
  }

  static readonly __mixins: Mixin[] = [PropertyShapeMixin, ShapeMixin];
}
PropertyShapeMixin.appliesTo = sh.PropertyShape
PropertyShapeMixin.Class = PropertyShapeImpl
