import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {provideConfig} from './loginConfig'
import { IndexComponent } from './index/index.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { SharedComponent } from './shared/shared.component';
import { VenuesComponent } from './vendor-specific/venues/venues.component';
import { VendorSpecificComponent } from './vendor-specific/vendor-specific.component';
import { DecorationComponent } from './vendor-specific/decoration/decoration.component';
import { CateringComponent } from './vendor-specific/catering/catering.component';
import { ShowallComponent } from './vendor-specific/showall/showall.component';
const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path:'login-comp',component:LoginCompComponent},
  {path:'shared',component:SharedComponent},
  {path:'vendor', component: ShowallComponent},
  {path :'vendor/venues', component: VenuesComponent},
  {path :'vendor/decoration', component: DecorationComponent},
  {path :'vendor/catering', component: CateringComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


