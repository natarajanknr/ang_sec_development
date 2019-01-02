import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  ComponentName:string = "AboutComponent";

  appList:string[] = ["Binding1","Binding2","Binding3"];

  ngOnInit() {  }

}
