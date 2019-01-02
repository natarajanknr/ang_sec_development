import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.less']
})
export class BindingComponent implements OnInit {

	bindingComponent:string ="Two way binding";

	bindingArray:string[] = ["binding 1","binding 2","binding 3"]

	employees:[];

  //constructor(private _bindingService: BindingService) { }

  ngOnInit() {
  	//this.employees = this._bindingService.getEmployees();
  	//console.log("this.employees --->",this.employees);
  }

}
