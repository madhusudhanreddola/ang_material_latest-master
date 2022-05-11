import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {OktaService} from 'src/app/shared/services/okta/okta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private oktaService : OktaService,
              private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      agencyIds: [undefined]
    });
  }

  ngOnInit(): void {
  }

  async initiateOktaLogin(){
      await this.oktaService.initiateOktaLogin();
  }
}
