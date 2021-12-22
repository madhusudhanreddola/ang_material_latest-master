import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaLogin } from 'src/app/shared/models/okta-login';
import { OktaService } from 'src/app/shared/services/okta/okta.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  oktaAuth : OktaLogin;


  constructor(private oktaService : OktaService, private router: Router) {
  }

  ngOnInit() {
    this.oktaService.assignLoginInfo();
    this.oktaAuth = new OktaLogin();
    this.refreshUserValues();
  }

  refreshUserValues(){
    this.oktaService.getLoginInfo().subscribe((data) => {
      this.oktaAuth = Object.assign(data);
    });
  }

  async refreshTokens(){
    this.oktaService.refreshTokens();
    //https://${yourOktaDomain}/oauth2/v1/authorize?client_id=0oan47pj9BsB30h7&response_type=token&response_mode=fragment&scope=okta.users.read&redirect_uri=${yourConfiguredRedirectUri}&nonce=UBGW&state=1234
  }


  async initiateOktaLogut(){
    await this.oktaService.initiateOktaLogut();    
  }

}
