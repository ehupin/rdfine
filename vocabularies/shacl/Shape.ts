import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';
import * as Rdf from '@rdfine/rdf';

export interface Shape extends Rdfs.Resource, RdfResource {
  and: Array<Sh.Shape>;
  class: Rdfs.Class;
  closed: boolean;
  in: Array<RDF.Term>;
  node: Sh.NodeShape;
  nodeKind: Sh.NodeKind;
  or: Array<Sh.Shape>;
  property: Array<Sh.PropertyShape>;
  rule: Sh.Rule;
  severity: Sh.Severity;
  sparql: Sh.SPARQLConstraint;
  target: Sh.Target;
  targetClass: Array<Rdfs.Class>;
  targetNode: Array<RDF.Term>;
  targetObjectsOf: Rdf.Property;
  targetSubjectsOf: Rdf.Property;
  xone: Array<Sh.Shape>;
}

export function ShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ShapeClass extends Rdfs.ResourceMixin(Resource) implements Shape {
    @property.resource({ values: 'list', as: [ShapeMixin] })
    and!: Array<Sh.Shape>;
    @property.resource({ as: [Rdfs.ClassMixin] })
    class!: Rdfs.Class;
    @property.literal({ type: Boolean })
    closed!: boolean;
    @property({ values: 'list' })
    in!: Array<RDF.Term>;
    @property.resource({ implicitTypes: [sh.NodeShape] })
    node!: Sh.NodeShape;
    @property()
    nodeKind!: Sh.NodeKind;
    @property.resource({ values: 'list', as: [ShapeMixin] })
    or!: Array<Sh.Shape>;
    @property.resource({ values: 'array', implicitTypes: [sh.PropertyShape] })
    property!: Array<Sh.PropertyShape>;
    @property.resource({ implicitTypes: [sh.Rule] })
    rule!: Sh.Rule;
    @property.resource({ implicitTypes: [sh.Severity] })
    severity!: Sh.Severity;
    @property.resource({ implicitTypes: [sh.SPARQLConstraint] })
    sparql!: Sh.SPARQLConstraint;
    @property.resource({ implicitTypes: [sh.Target] })
    target!: Sh.Target;
    @property.resource({ values: 'array', as: [Rdfs.ClassMixin] })
    targetClass!: Array<Rdfs.Class>;
    @property({ values: 'array' })
    targetNode!: Array<RDF.Term>;
    @property.resource({ as: [Rdf.PropertyMixin] })
    targetObjectsOf!: Rdf.Property;
    @property.resource({ as: [Rdf.PropertyMixin] })
    targetSubjectsOf!: Rdf.Property;
    @property.resource({ values: 'list', as: [ShapeMixin] })
    xone!: Array<Sh.Shape>;
  }
  return ShapeClass
}

class ShapeImpl extends ShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Shape>) {
    super(arg, init)
    this.types.add(sh.Shape)
  }

  static readonly __mixins: Mixin[] = [ShapeMixin, Rdfs.ResourceMixin];
}
ShapeMixin.appliesTo = sh.Shape
ShapeMixin.Class = ShapeImpl
