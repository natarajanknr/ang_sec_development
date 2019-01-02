import { Injectable} from '@angular/core';
import { Init } from "./init-record";

@Injectable()
export class RecordService extends Init {
  constructor() {
    super();
    console.log("Initializing Employees service ...");
    this.load();
  }

  getEmployees() {
    let records = JSON.parse(localStorage.getItem('records'));
    return records;
  }

  deleteEmployee(empid) {
  let records = JSON.parse(localStorage.getItem('records'));
    for (let i = 0; i < records.length; i++) {
      if (records[i].id == empid) {
        records.splice(i, 1);
      }
    }
    localStorage.setItem('records', JSON.stringify(records));
  }
}
