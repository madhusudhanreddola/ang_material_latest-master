import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OktaService } from '../services/okta/okta.service';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';

const oktaAuth = new OktaAuth({
  clientId: '0oa2us3576UHXlMpN5d7',
  issuer: `https://dev-01751974.okta.com/oauth2/default`,
  redirectUri: 'http://localhost:4200/oktacallback',
  scopes: ['openid', 'profile', 'email','offline_access'],
  pkce: true
});

// const oktaAuth = new OktaAuth({
//       clientId: '0oa2us3576UHXlMpN5d7',
//       issuer: `https://dev-01751974.okta.com/oauth2/default`,
//       redirectUri: 'http://localhost:4200/oktacallback',
//       scopes: ['openid', 'profile', 'email','offline_access'],
//       pkce: true
// });
//Prasad Okta
//0oa27un7giJumhyFg5d7
//dev-74259127.okta.com
// const oktaAuth = new OktaAuth({
//   clientId: '0oa27un7giJumhyFg5d7',
//   issuer: `https://dev-74259127.okta.com/oauth2/default`,
//   redirectUri: 'http://localhost:4200/oktacallback',
//   scopes: ['openid', 'profile', 'email','offline_access'],
//   pkce: true
// });

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    HttpClientModule,
    OktaAuthModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers:[
    OktaService,
    {provide: OKTA_CONFIG, useValue: {oktaAuth}}
  ]

})
export class SharedModule { }
