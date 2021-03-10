import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { WellComponent } from '../well/well.component'
@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
  wellList: any;
  @ViewChild(WellComponent) child;
  @ViewChild('sourceKey') key: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.wellList = {
      "wells": [
        {
          "name": "Joe",
          "type": "esp",
          "sourceKey": 100001
        },
        {
          "name": "Biden",
          "type": "ris",
          "sourceKey": 10011111001
        },
        {
          "name": "John",
          "type": "esp",
          "sourceKey": 10000100
        },
        {
          "name": "Kumar",
          "type": "ris",
          "sourceKey": 10001
        },
        {
          "name": "Arhav",
          "type": "esp",
          "sourceKey": 10000101
        },
        {
          "name": "Nalan",
          "type": "esp",
          "sourceKey": 100101
        }
      ]
    };

  }

  clickedRow(key: number) {
    this.child.updateSourceKey(key);
  }
  addWellList(event: any) {
    this.wellList.wells.push(event);
  }
}
