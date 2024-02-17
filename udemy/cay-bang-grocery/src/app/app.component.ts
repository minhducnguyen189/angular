import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SessionStorageService } from './services/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class') className='';

  toggleControl = new FormControl(false);
  constructor(private dialog: MatDialog, private overlayContainer: OverlayContainer, private sessionStorageService: SessionStorageService) {

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
    this.getSelectedProductNumber();
  }

  getSelectedProductNumber() {
    return this.sessionStorageService.getSelectedProducts().length;
  }

}
