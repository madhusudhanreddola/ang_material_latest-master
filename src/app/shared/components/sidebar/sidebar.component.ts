import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  deviceLayout = 'web';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.activateMobileLayout();
      }else{
        this.activateWebLayout();
      }
    });
   }

  ngOnInit(): void {
  }

  activateMobileLayout(): void{
    console.log('Moibile layout');
    this.deviceLayout = 'mobile';
  }


  activateWebLayout(): void{
    console.log('Web layout');
    this.deviceLayout = 'web';
  }

}
