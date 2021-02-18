import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Iphotos {
  url: string;
  description: string;
}
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  photos: Iphotos[] = [];

  constructor(http:HttpClient) {

    http
    .get<Iphotos[]>('http://localhost:3000/flavio/photos')
    .subscribe(photos => this.photos = photos);
  }
}
