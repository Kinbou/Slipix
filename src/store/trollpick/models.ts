import { BaseState } from '../store-helper';
import { Trollpick } from '@/api/trollpick/models';

export interface TrollpickState extends BaseState {
  trollpick: Trollpick,
  trollpickActif: Array<Trollpick>,
  trollpickSoon: Array<Trollpick>;
}

