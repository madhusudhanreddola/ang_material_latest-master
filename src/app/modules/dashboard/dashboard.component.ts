import { Component, OnInit } from '@angular/core';
import { OktaService } from 'src/app/shared/services/okta/okta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private oktaService : OktaService) { }

  ngOnInit(): void {    
  }

  async initiateOktaLogin(){
      await this.oktaService.initiateOktaLogin();
  }

  

}
