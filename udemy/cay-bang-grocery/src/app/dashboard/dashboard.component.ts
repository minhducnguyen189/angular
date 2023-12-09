import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @HostBinding('class') className='';

  toggleControl = new FormControl(false);

  constructor(private dialog: MatDialog, private overlayContainer: OverlayContainer) {

  }
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(val => {
      const darkModeClass = 'dark-mode';
      this.className = val ? darkModeClass : '';
      const classes = this.overlayContainer.getContainerElement().classList;
      if (val) {
        classes.add(darkModeClass);
      } else {
        classes.remove(darkModeClass);
      }
    });
  }



}
