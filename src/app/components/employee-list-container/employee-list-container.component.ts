import { Component } from '@angular/core';
import { OnInit, NgZone } from '@angular/core';

import * as Plotly from 'plotly.js-dist-min';
import { EmployeeData } from './types';
import { Rnd } from 'src/app/data/rnd';
import { Sales } from 'src/app/data/sales';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.scss'],
})
export class EmployeeListContainerComponent implements OnInit {
  rndList: EmployeeData[] = Rnd;
  salesList: EmployeeData[] = Sales;
  constructor(private _ngZone: NgZone) {}
  ngOnInit() {
    const mapValues = new Map<number, number>();
    this.rndList.concat(this.salesList).forEach(({ num, label }) => {
      if (mapValues.has(num)) {
        mapValues.set(num, mapValues.get(num)! + 1);
      } else {
        mapValues.set(num, 1);
      }
    });
    let x: number[] = [];
    let y: number[] = [];
    for (let [key, value] of mapValues.entries()) {
      x.push(key);
      y.push(value);
    }
    this._ngZone.runOutsideAngular(() => {
      Plotly.newPlot('chart', [{ x, y, type: 'bar' }]);
    });
  }
}
