import { NgModule } from '@angular/core';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RouterModule, Routes } from '@angular/router';


const orderRoutes: Routes=[
  {path: '', 
  component: OrderlistComponent 
}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(orderRoutes),
  ]
})
export class OrderroutingModule { }
