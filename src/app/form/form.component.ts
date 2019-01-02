import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecordService } from "../grid/recordServices";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})

export class FormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  onSubmit(formValue: any) {
  	console.log("formValue ---->",formValue);
    //this.user.gender = form.controls['gender'].value;
    
    alert("FirstName --->"+ formValue.firstname + " LastName ---->"+formValue.lastname+ " EamilId ---->"+formValue.emailId + " Gender ---->"+formValue.gender);
  }

  ngOnInit() {
 	 this.form = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastname: [null, Validators.required],
      emailId: [null, [Validators.required, Validators.email]]
    });
  }
}
