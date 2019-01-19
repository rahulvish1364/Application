import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig, AuthService, LinkedinLoginProvider, SocialUser } from 'ng4-social-login';


@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  public user : any = SocialUser;
  public loggedIn : boolean 
  constructor(public socialAuthService : AuthService) {  }

  facebookLogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(userData =>{
      this.user = userData
    })
  }
  googleLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(userData=>{
      this.user = userData;
    })
  }
  linkedinLogin(){
    this.socialAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID).then(userData=>{
      this.user = userData;
      
    })
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }


  
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }




}
