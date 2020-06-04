import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelboxComponent } from '../modelbox/modelbox.component';
import { CommonDataService } from 'src/services/common-data.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  public sectionHeaderName = '';
  public custumUrl = '';
  public natureList = ['natural1', 'natural2', 'natural3'];
  constructor(public dialog: MatDialog, public commonDataService: CommonDataService) {
    this.sectionHeaderName = 'Nature Photos';
    this.custumUrl = this.commonDataService.hostName;
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
