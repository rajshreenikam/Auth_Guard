import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const prodRoutes: Routes=[
  {path:'', component: ProductsComponent, children : [
    { path: 'laptop', component: LaptopComponent}, 
    { path: 'tablet', component: MobileComponent},
    { path: 'tv', component: TvComponent},
    { path: 'washingmachine', component: WashingmachineComponent}
  ]},
]

@NgModule({
  declarations: [
    LaptopComponent,
    TvComponent,
    MobileComponent,
    WashingmachineComponent,
    ProductsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
  ],
  exports: [
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('Product module called');
    
  }
}
