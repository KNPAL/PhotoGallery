import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/services/common-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showNavBar: boolean;
  public isDesktop: boolean;
  public siteName = 'Photo Gallery';
  public navigationListArray = [];
  constructor(public router: Router, public commonDataService: CommonDataService) {
    if (window.innerWidth < 576) {
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
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
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth < 576) {
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
  }
  removeClass(event) {
    if (this.isDesktop && !!document.getElementsByClassName('show')) {
      document.getElementsByClassName('show')[0].classList.remove('show');
    }
  }
}
