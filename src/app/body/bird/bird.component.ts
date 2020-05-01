import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

  public sectionHeaderName = '';
  public birdList = ['Bird1', 'Bird2', 'Bird3', 'Bird5', 'Bird6', 'Bird7', 'Bird8', 'Bird9'];
  constructor() {
    this.sectionHeaderName = 'Bird Photo Gallary';
  }

  ngOnInit() {
  }

}
