import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { Observable, Subject } from 'rxjs';
import { OktaLogin } from '../../models/okta-login';

@Injectable({
  providedIn: 'root'
})
export class OktaService {

  private oktaLoginSubject = new Subject<OktaLogin>();

  constructor(private http: HttpClient,
    private oktaAuth : OktaAuth) {
      this.oktaAuth.tokenManager.on('renewed', function (key, newToken, oldToken) {
        console.log('Token with key', key, 'has been renewed');
        console.log('Old token:', oldToken);
        console.log('New token:', newToken);
      });
     }

  async initiateOktaLogin(){
    console.log('Initiating Okta Login');
    await this.oktaAuth.signInWithRedirect({
      originalUri: '/posts'
    });
  }

  async assignLoginInfo(){
    const userClaims = await this.oktaAuth.getUser();    
    const ol = new OktaLogin();
    ol.userName = userClaims.name;
    ol.accessToken = this.oktaAuth.getAccessToken();
    ol.expiresAt = new Date(this.oktaAuth.authStateManager.getAuthState().accessToken.expiresAt*1000).toLocaleString();    
    ol.refreshToken = this.oktaAuth.getRefreshToken();
    this.oktaLoginSubject.next(ol);
  }

  async initiateOktaLogut(){
    await this.oktaAuth.signOut();
    //this.oktaAuth.tokenManager.clear(); //For just Logginf out of individual App  
    //this.router.navigateByUrl('/');
  }

  getLoginInfo(): Observable<OktaLogin>{    
    return this.oktaLoginSubject.asObservable();
  }

  refreshTokens(){    
      this.oktaAuth.tokenManager.renew('accessToken')
    .then(function (newToken) {      
        console.log(newToken);        
      });      
      this.assignLoginInfo();

      this.oktaAuth.getUser().then(function(claims){
        console.log(claims);
      });
  }

}
