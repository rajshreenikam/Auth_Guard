import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerslistComponent } from './customerslist/customerslist.component';
import { CustomersroutingModule } from './customersrouting.module';


@NgModule({
  declarations: [
    CustomerslistComponent
  ],
  imports: [
    CommonModule,
    CustomersroutingModule
  ]
})
export class CustomersModule { 
  constructor(){
    console.log('Customer module called');
    
  }
}
