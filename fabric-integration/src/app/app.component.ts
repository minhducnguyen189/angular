import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const canvas = new fabric.Canvas('myCanvas', {
      backgroundColor: '#ebebef',
      selection: false,
      preserveObjectStacking: true,
    });
    
    const text = new fabric.Textbox('Hello World', {
      width: 200,
      height: 100,
      fontSize: 24,
      cursorColor: 'blue',
      left: 50,
      top: 50
    });
    canvas.add(text);
  }

}
