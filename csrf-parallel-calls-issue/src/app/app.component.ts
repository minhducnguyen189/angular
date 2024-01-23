import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'csrf-parallel-calls-issue';

  constructor(private apiService: ApiServiceService) {}


  ngOnInit(): void {
    this.apiService.getAdminMessage().subscribe(result => {
      console.log(result);
    })
  }


  callPost() {
    this.apiService.callPostMessage().subscribe();
  }

}
