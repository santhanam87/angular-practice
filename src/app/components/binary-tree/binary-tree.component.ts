import { Component, OnInit } from '@angular/core';
import { BinnaryTree } from '../../dataStructure/binnaryTree';

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss'],
})
export class BinaryTreeComponent implements OnInit {
  ngOnInit(): void {
    let treeInstance = new BinnaryTree([
      3,
      9,
      20,
      null,
      null,
      15,
      null,
      null,
      8,
      9,
      null,
      7,
    ]);
    console.info(treeInstance.printTree());
  }
}
