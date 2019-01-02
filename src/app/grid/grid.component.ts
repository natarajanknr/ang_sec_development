import { Component, OnInit } from '@angular/core';
import { RecordService } from "./recordServices";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})

export class GridComponent implements OnInit {
  records:any[];
  GridStaticContent:string = "Grid component scope value";

  constructor(private _recordService: RecordService) { }

  ngOnInit() {
    this.records = this._recordService.getEmployees();
  }
  deleteEmployee(empid: any) {
    if(window.confirm('Are sure you want to delete this item ?')){
      //put your delete method logic here
      //this._recordService.deleteEmployee(empid);
      //this.records = this._recordService.getEmployees();
    }
  }
}
