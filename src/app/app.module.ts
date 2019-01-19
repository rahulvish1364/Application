import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IndexComponent} from './index/index.component'
import {FooterComponent} from  './index/footer/footer.component';
import {NavbarComponent} from './index/navbar/navbar.component'
import { SharedComponent } from './shared/shared.component';
import {LoginCompComponent} from './login-comp/login-comp.component';
import { from } from 'rxjs';
import { SocialLoginModule , AuthService, GoogleLoginProvider , FacebookLoginProvider , LinkedInResponse, AuthServiceConfig, LinkedinLoginProvider}from 'ng4-social-login';
const config = new AuthServiceConfig([
 {
   id: GoogleLoginProvider.PROVIDER_ID,
   provider : new GoogleLoginProvider('259111091723-rjbjqnj8bg326fdmejvm5bci0qnj1p3k.apps.googleusercontent.com'),
 },
 {
   id: FacebookLoginProvider.PROVIDER_ID,
   provider: new FacebookLoginProvider('526227857893828')
 },
 {
   id: LinkedinLoginProvider.PROVIDER_ID,
   provider:new  LinkedinLoginProvider('812r84a7n3hl3c')
 }
], false)

export function provideConfig(){
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    NavbarComponent,
    SharedComponent,
    LoginCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [{provide :AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
