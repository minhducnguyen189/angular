import { Component, EventEmitter, Output } from '@angular/core';
import { ServerElement } from '../server-element/server-element.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';

  @Output('servElement')
  serverElement: EventEmitter<ServerElement> = new EventEmitter<ServerElement>();

  onAddServer() {
   const element: ServerElement = this.buildServerElement('server');
   this.serverElement.emit(element);
  }

  onAddBlueprint() {
    const element: ServerElement = this.buildServerElement('blueprint');
    this.serverElement.emit(element);
  }

  private buildServerElement(serverType: string): ServerElement {
      return {
        type: serverType,
        name: this.newServerName,
        content: this.newServerContent
     };
  }

}
