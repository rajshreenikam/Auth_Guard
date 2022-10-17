import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { prefixed } from 'eventemitter3';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderlistComponent } from './order/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PreloadingDirective } from './preloading.directive';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent },
  {path :'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path: 'products',canActivate:[AuthGuard], loadChildren: './products/products.module#ProductsModule', data: { preload: true, delay: false }},
  {path: 'order', loadChildren: './order/order.module#OrderModule', data: { preload: false, delay: true }},
  {path: 'customers', loadChildren: './customers/customers.module#CustomersModule', data: { preload: false, delay: true } },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadingDirective})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // constructor( private preload: PreloadingDirective){

  // }
 }
