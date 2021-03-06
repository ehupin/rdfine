import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FindActionMixin } from '../lib/FindAction';
import { DiscoverActionMixin } from '../lib/DiscoverAction';

export const DiscoverActionBundle = [
  FindActionMixin as Mixin,
  DiscoverActionMixin as Mixin];
