import { Component, OnInit } from '@angular/core';
import { DomesticItemService } from 'src/app/services/domesticItem/domestic-item.service';
import { DomesticItem } from 'src/app/types/types';

@Component({
  selector: 'app-domestic-items',
  templateUrl: './domestic-items.component.html',
  styleUrls: ['./domestic-items.component.scss'],
})
export class DomesticItemsComponent implements OnInit {
  constructor(private domesticItemServer: DomesticItemService) {}
  ngOnInit(): void {
    const domesticItems = this.domesticItemServer
      .getDomesticItems()
      .subscribe((domesticItems) => {
        console.info(domesticItems);
      });
  }
}
