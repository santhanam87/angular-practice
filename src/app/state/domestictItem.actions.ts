import { createActionGroup, props } from '@ngrx/store';
import { DomesticItem } from '../types/types';

export const DomesticItemAction = createActionGroup({
  source: 'DomesticItem',
  events: {
    'Add Domestic Item': props<{ sku: string }>(),
    'Remove Domestic Item': props<{ sku: string }>(),
  },
});

export const DomesticItemApiAction = createActionGroup({
  source: 'DomesticItem API',
  events: {
    'Retrive Domestic Items': props<{ domesticItems: DomesticItem[] }>(),
  },
});
