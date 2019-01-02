import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  ComponentName:string = "ContacPageComponent";

  appList:string[] = ["Binding1","Binding2","Binding3"];

  ngOnInit() {
  }

}
