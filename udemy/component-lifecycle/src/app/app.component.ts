import { Component } from '@angular/core';
import { ServerElement } from './server-element/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serverElements: ServerElement[] = [{type: "server", name: "sample", content: "test server!"}];
  lastServerName: string = '';
  destroyComponent: boolean = false;

  addServerElement(serverElement: ServerElement) {
    this.serverElements.push(serverElement);
    this.destroyComponent = false;
  }

  changeServerName() {
    let index = this.serverElements.length;
    if (index > 0) {
      this.lastServerName = this.serverElements[index - 1].name;
    } else {
      this.lastServerName = '';
    }
    this.destroyComponent = false;
  }

  destroyServers() {
    this.serverElements = [];
    this.destroyComponent = true;
  }

}

