import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  list: any[];
  index: number;
}

@Component({
  selector: 'app-modelbox',
  templateUrl: './modelbox.component.html',
  styleUrls: ['./modelbox.component.css']
})
export class ModelboxComponent implements OnInit {
  public currentImage;
  public contentList = [];
  public contentIndex;
  constructor(public dialogRef: MatDialogRef<ModelboxComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.contentList = this.data.list;
    this.contentIndex = this.data.index;
  }

  ngOnInit() {
    this.currentImage = this.contentList[this.contentIndex];
  }

}
