import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Game<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  characterAttribute: Schema.Thing<D> | undefined;
  gameItem: Schema.Thing<D> | undefined;
  gameLocation: Schema.Place<D> | Schema.PostalAddress<D> | undefined;
  numberOfPlayers: Schema.QuantitativeValue<D> | undefined;
  quest: Schema.Thing<D> | undefined;
}

export function GameMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Game> & RdfResourceCore> & Base {
  @namespace(schema)
  class GameClass extends CreativeWorkMixin(Resource) implements Partial<Game> {
    @property.resource()
    characterAttribute: Schema.Thing | undefined;
    @property.resource()
    gameItem: Schema.Thing | undefined;
    @property.resource()
    gameLocation: Schema.Place | Schema.PostalAddress | undefined;
    @property.resource()
    numberOfPlayers: Schema.QuantitativeValue | undefined;
    @property.resource()
    quest: Schema.Thing | undefined;
  }
  return GameClass
}

class GameImpl extends GameMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Game>) {
    super(arg, init)
    this.types.add(schema.Game)
  }

  static readonly __mixins: Mixin[] = [GameMixin, CreativeWorkMixin];
}
GameMixin.appliesTo = schema.Game
GameMixin.Class = GameImpl

export const fromPointer = createFactory<Game>([CreativeWorkMixin, GameMixin], { types: [schema.Game] });
