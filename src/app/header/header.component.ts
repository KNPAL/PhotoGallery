import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/services/common-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showNavBar: boolean;
  public siteName = 'Photo Gallery';
  public navigationListArray = [];
  constructor(public router: Router, public commonDataService: CommonDataService) {
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      this.commonDataService.hideNavBarElement(this.router.url);
      this.navigationListArray = this.commonDataService.navigationListArray;
      if (this.router.url.includes('home')) {
        this.showNavBar = false;
      } else {
        this.showNavBar = true;
      }
    });
  }
}
