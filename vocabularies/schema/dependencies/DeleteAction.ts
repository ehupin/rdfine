import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { UpdateActionMixin } from '../UpdateAction';
import { DeleteActionMixin } from '../DeleteAction';

export const DeleteActionDependencies = [
  UpdateActionMixin as Mixin,
  DeleteActionMixin as Mixin];