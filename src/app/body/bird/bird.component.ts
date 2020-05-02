import { Component, OnInit } from '@angular/core';
import { ModelboxComponent } from '../modelbox/modelbox.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

  public sectionHeaderName = '';
  public birdList = ['Bird1', 'Bird2', 'Bird3', 'Bird5', 'Bird6', 'Bird7', 'Bird8'];
  constructor(public dialog: MatDialog) {
    this.sectionHeaderName = 'Bird Photos';
  }

  ngOnInit() {
  }

  openDialog(ind): void {
    const dialogRef = this.dialog.open(ModelboxComponent, {
      width: '550px',
      data: { list: this.birdList, index: ind }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
