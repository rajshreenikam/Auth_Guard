import { NgModule } from '@angular/core';
import { CustomerslistComponent } from './customerslist/customerslist.component';
import { RouterModule, Routes } from '@angular/router';


const customerRoutes: Routes=[
  {path:'', component: CustomerslistComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(customerRoutes)
  ]
})
export class CustomersroutingModule { }
