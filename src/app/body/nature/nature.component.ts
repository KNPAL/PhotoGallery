import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelboxComponent } from '../modelbox/modelbox.component';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  public sectionHeaderName = '';
  public natureList = ['natural1', 'natural2', 'natural3'];
  constructor(public dialog: MatDialog) {
    this.sectionHeaderName = 'Nature Photos';
  }

  ngOnInit() {
  }

  openDialog(ind): void {
    const dialogRef = this.dialog.open(ModelboxComponent, {
      width: '550px',
      data: { list: this.natureList, index: ind }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
