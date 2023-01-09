import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DomesticItem } from '../types/types';

export const selectDomesticItems =
  createFeatureSelector<DomesticItem[]>('domesticItems');

export const selectDoemsticItemsCollectionState =
  createFeatureSelector<string[]>('collection');

export const selectDomesticItemCollection = createSelector(
  selectDomesticItems,
  selectDoemsticItemsCollectionState,
  (domesticItems, collectionState) => {
    collectionState.map((sku) =>
      domesticItems.filter(({ sku: itemSku }) => sku == itemSku)
    );
  }
);
