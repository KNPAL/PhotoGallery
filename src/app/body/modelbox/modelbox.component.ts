import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonDataService } from 'src/services/common-data.service';

export interface DialogData {
  list: any[];
  index: number;
}

@Component({
  selector: 'app-modelbox',
  templateUrl: './modelbox.component.html',
  styleUrls: ['./modelbox.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModelboxComponent implements OnInit {
  public currentImage;
  public contentList = [];
  public contentIndex;
  public showleftArrow = false;
  public showrightArrow = false;
  public custumUrl = '';
  constructor(public dialogRef: MatDialogRef<ModelboxComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public commonDataService: CommonDataService) {
    this.contentList = this.data.list;
    this.contentIndex = this.data.index;
    this.custumUrl = this.commonDataService.hostName;
    this.showHideArrows();
  }

  ngOnInit() {
    this.currentImage = this.contentList[this.contentIndex];
  }

  moveright() {
    if (this.contentIndex < this.contentList.length - 1) {
      this.contentIndex = this.contentIndex + 1;
    }
    this.showHideArrows();
    this.currentImage = this.contentList[this.contentIndex];
  }

  moveleft() {
    if (this.contentIndex > 0) {
      this.contentIndex = this.contentIndex - 1;
    }
    this.showHideArrows();
    this.currentImage = this.contentList[this.contentIndex];
  }

  showHideArrows() {
    if (this.contentIndex === 0 && this.contentList.length === 1) {
      this.showrightArrow = false;
      this.showleftArrow = false;
    } else {
      if (this.contentIndex === 0) {
        this.showrightArrow = true;
        this.showleftArrow = false;
      } else if (this.contentIndex > 0 && this.contentIndex < this.contentList.length - 1) {
        this.showrightArrow = true;
        this.showleftArrow = true;
      } else {
        this.showrightArrow = false;
        this.showleftArrow = true;
      }

    }
  }
}
