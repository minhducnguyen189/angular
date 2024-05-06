import { Component } from '@angular/core';
import { ServerElement } from './server-element/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  addServerElement(serverElement: ServerElement) {
    this.serverElements.push(serverElement);
  }

}
