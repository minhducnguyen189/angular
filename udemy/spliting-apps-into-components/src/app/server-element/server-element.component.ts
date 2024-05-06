import { Component, Input } from '@angular/core';
import { ServerElement } from './server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent {


    @Input('servElement')
    serverElement!: ServerElement;



}
