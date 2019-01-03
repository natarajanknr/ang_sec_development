import { Component, OnInit } from '@angular/core';
//import { RecordService } from "./recordServices";

import { APIService } from '../services/api-service';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})

export class GridComponent implements OnInit {
  public employee = [];

  GridStaticContent:string = "Grid component scope value";

  //constructor(private _recordService: RecordService) { }

  constructor(private _apiService: APIService) { }

  ngOnInit() {
      this._apiService.getEmployees()
        .subscribe(data => this.employee = data);
  }
  
  deleteEmployee(empid: any) {
    if(window.confirm('Are sure you want to delete this item ?')){
      //put your delete method logic here
      //this._recordService.deleteEmployee(empid);
      //this.records = this._recordService.getEmployees();
    }
  }
}
