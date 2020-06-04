import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelboxComponent } from '../modelbox/modelbox.component';
import { CommonDataService } from 'src/services/common-data.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  public sectionHeaderName = '';
  public custumUrl = '';
  public spaceList = ['space1'];
  constructor(public dialog: MatDialog, public commonDataService: CommonDataService) {
    this.sectionHeaderName = 'Space Photos';
    this.custumUrl = this.commonDataService.hostName;
  }
  ngOnInit() {
  }

  openDialog(ind): void {
    const dialogRef = this.dialog.open(ModelboxComponent, {
      width: '550px',
      data: { list: this.spaceList, index: ind }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
