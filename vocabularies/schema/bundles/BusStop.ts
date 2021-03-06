import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CivicStructureMixin } from '../lib/CivicStructure';
import { BusStopMixin } from '../lib/BusStop';

export const BusStopBundle = [
  CivicStructureMixin as Mixin,
  BusStopMixin as Mixin];
