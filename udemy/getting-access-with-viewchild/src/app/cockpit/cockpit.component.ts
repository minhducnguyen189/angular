import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  @ViewChild('serverContentInput', {static: true})
  serverContentInput!: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
   const element: ServerElement = this.buildServerElement('server', serverNameInput.value);
   this.serverElement.emit(element);
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    const element: ServerElement = this.buildServerElement('blueprint', serverNameInput.value);
    this.serverElement.emit(element);
  }

  private buildServerElement(serverType: string, serverName: string): ServerElement {
      return {
        type: serverType,
        name: this.newServerName,
        content: this.serverContentInput.nativeElement.value
     };
  }

}
