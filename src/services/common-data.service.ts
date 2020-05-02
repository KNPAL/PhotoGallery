import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  public navigationListArray = [
    { name: 'Home', route: '/home', show: true },
    { name: 'Animal', route: '/animal', show: true },
    { name: 'Bird', route: '/bird', show: true },
    { name: 'Nature', route: '/nature', show: true },
    { name: 'Space', route: '/space', show: true }
  ];
  constructor() { }

  hideNavBarElement(name: string) {
    this.navigationListArray.forEach(element => {
      if (element.route === name) {
        element.show = false;
      } else {
        element.show = true;
      }
    });
  }
}

