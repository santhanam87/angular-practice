import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { DomesticItem } from '../types/types';
import {
  DomesticItemApiAction,
  DomesticItemAction,
} from './domestictItem.actions';

const initialState: DomesticItem[] = [];

export const DomesticItemsReducer = createReducer(
  initialState,
  on(
    DomesticItemApiAction.retriveDomesticItems,
    (_state, { domesticItems }) => domesticItems
  )
);

const collectionInitialState: string[] = [];

export const DomesticItemCollectionReducer = createReducer(
  collectionInitialState,
  on(DomesticItemAction.addDomesticItem, (state, { sku }) => [sku, ...state]),
  on(DomesticItemAction.removeDomesticItem, (state, { sku }) => {
    console.info(state, sku);
    const domesticItems = [...state];
    domesticItems.splice(state.indexOf(sku), 1);
    return domesticItems;
  })
);
