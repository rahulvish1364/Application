import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {provideConfig} from './loginConfig'
import { IndexComponent } from './index/index.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { VenuesComponent } from './vendor-specific/venues/venues.component';
import { VendorSpecificComponent } from './vendor-specific/vendor-specific.component';
import { DecorationComponent } from './vendor-specific/decoration/decoration.component';
import { CateringComponent } from './vendor-specific/catering/catering.component';
import { ShowallComponent } from './vendor-specific/showall/showall.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path: 'login', component: LoginCompComponent},
  {path:'', component:IndexComponent},
  {path:'vendor', component: VendorSpecificComponent},
  {path: 'vendor/showall', component: ShowallComponent},
  {path :'vendor/venues', component: VenuesComponent},
  {path :'vendor/decoration', component: DecorationComponent},
  {path :'vendor/catering', component: CateringComponent},
  {path: 'birthday', component: BirthdayComponent},
  {path: 'signup', component: SignUpComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


