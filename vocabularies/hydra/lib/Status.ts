import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import { ResourceMixin } from './Resource';

export interface Status<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, RdfResource<D> {
  description: string | undefined;
  statusCode: number | undefined;
  title: string | undefined;
}

export function StatusMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Status> & RdfResourceCore> & Base {
  @namespace(hydra)
  class StatusClass extends ResourceMixin(Resource) implements Partial<Status> {
    @property.literal()
    description: string | undefined;
    @property.literal({ type: Number })
    statusCode: number | undefined;
    @property.literal()
    title: string | undefined;
  }
  return StatusClass
}

class StatusImpl extends StatusMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Status>) {
    super(arg, init)
    this.types.add(hydra.Status)
  }

  static readonly __mixins: Mixin[] = [StatusMixin, ResourceMixin];
}
StatusMixin.appliesTo = hydra.Status
StatusMixin.Class = StatusImpl

export const fromPointer = createFactory<Status>([ResourceMixin, StatusMixin], { types: [hydra.Status] });
