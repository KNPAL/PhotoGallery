import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showNavBar: boolean;
  public siteName = 'Photo Gallary';
  public navigationListArray = [
    { name: 'Home', route: '/home' },
    { name: 'Animal Gallary', route: '/animal' },
    { name: 'Bird Gallary', route: '/bird' }];
  constructor(public router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (this.router.url.includes('home')) {
        this.showNavBar = false;
      } else {
        this.showNavBar = true;
      }
    });
  }
}
