import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/services/common-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhotoGallery';

  constructor(public router: Router, public commonDataService: CommonDataService) {
    this.router.navigate(['/home']);
    this.commonDataService.hostName = window.location.hostname.toString();
    if (this.commonDataService.hostName.includes('localhost')) {
      this.commonDataService.hostName =  '/';
    } else {
      this.commonDataService.hostName = 'https://knpal.github.io/PhotoGallery/';
    }
  }
}
