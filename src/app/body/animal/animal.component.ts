import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  public sectionHeaderName = '';
  public animalList = ['Animal1', 'Animal2', 'Animal10', 'Animal4', 'Animal5', 'Animal6', 'Animal7', 'Animal8', 'Animal9'];
  constructor() {
    this.sectionHeaderName = 'Animal Photo Gallary';
  }

  ngOnInit() {
  }

}
