import { Component } from '@angular/core';
import * as tinymce from 'tinymce';
import { FileServiceService } from './service/file-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fileService: FileServiceService) { }

  image_upload_handler = (blobInfo: any) => new Promise<any>((resolve) => {

    // const xhr = new XMLHttpRequest();
    // xhr.withCredentials = false;
    // xhr.open('POST', 'http://localhost:8080/v1/files');
    // xhr.onload = () => {
    //   const json = JSON.parse(xhr.responseText);
    //   resolve(json.location);
    // };
    // const formData = new FormData();
    // formData.append('file', blobInfo.blob(), blobInfo.filename());
    // xhr.send(formData);

    this.fileService
      .uploadFile(blobInfo.blob())
      .subscribe(result => {
        resolve(result.location);
      });
  });

  tinyMCEConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    relative_urls: false,
    remove_script_host: false,
    images_upload_handler: this.image_upload_handler,
    // image_upload_url: "http://localhost:8080/v1/files",
    automatic_uploads: false,
    plugins: [
      'preview',
      'code',
      'save'
    ],
    toolbar: [
      'preview | code | save',
    ],
    save_onsavecallback: (editor: tinymce.Editor) => {
      editor.uploadImages();
      console.log('Saved');
      console.log(editor.getContent());
    }
  };

}
