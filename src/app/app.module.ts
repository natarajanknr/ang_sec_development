import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';


import { RecordService } from './grid/recordServices';
import { APIService } from './services/api-service';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FormComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RecordService,APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
