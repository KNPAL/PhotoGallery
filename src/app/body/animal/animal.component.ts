import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelboxComponent } from '../modelbox/modelbox.component';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  public sectionHeaderName = '';
  public animalList = ['Animal1', 'Animal2', 'Animal10', 'Animal4', 'Animal5', 'Animal6', 'Animal7', 'Animal8', 'Animal9'];
  constructor(public dialog: MatDialog) {
    this.sectionHeaderName = 'Animal Photo Gallary';
  }

  ngOnInit() {
  }

  openDialog(ind): void {
    const dialogRef = this.dialog.open(ModelboxComponent, {
      width: '550px',
      data: { list: this.animalList, index: ind }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
