import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tinymce-integration';

  tinyMCEConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    images_upload_url: 'http://localhost:8080/v1/files',   
    plugins: [
      'preview',
      'code'
    ],
    toolbar: [
      'preview',
      'code',
  ]
  }

}
