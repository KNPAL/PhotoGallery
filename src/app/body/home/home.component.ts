import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public commonDataService: CommonDataService) {

  }

  ngOnInit() {
   // this.commonDataService.hideNavBarElement('Home');
  }

}
