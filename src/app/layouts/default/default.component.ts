import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  matcher: MediaQueryList;
  sideBarOpen = true;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Medium, Breakpoints.Large
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.Medium] || state.breakpoints[Breakpoints.Large]) {
        this.sideBarOpen = true;
      }
    });
  }

  sideBarToggler(e){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
