import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DomesticItemService } from 'src/app/services/domesticItem/domestic-item.service';
import { selectDomesticItems } from 'src/app/state/domesticItem.selector';
import {
  DomesticItemApiAction,
  DomesticItemAction,
} from 'src/app/state/domestictItem.actions';
import { DomesticItem } from 'src/app/types/types';

@Component({
  selector: 'app-domestic-items',
  templateUrl: './domestic-items.component.html',
  styleUrls: ['./domestic-items.component.scss'],
})
export class DomesticItemsComponent implements OnInit {
  $domesticItems = this._store.select(selectDomesticItems);
  removeItem({ sku }: DomesticItem) {
    this._store.dispatch(DomesticItemAction.removeDomesticItem({ sku }));
  }
  constructor(
    private domesticItemServer: DomesticItemService,
    private _store: Store
  ) {}
  ngOnInit(): void {
    const domesticItems = this.domesticItemServer
      .getDomesticItems()
      .subscribe((domesticItems) => {
        this._store.dispatch(
          DomesticItemApiAction.retriveDomesticItems({ domesticItems })
        );
      });
  }
}
