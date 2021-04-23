import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class WheatherService {
  imgPath: string = '../../assets/images/';
  constructor(private http: HttpClient) {}
  public response:any;
  wheather() {
    this.http.get('https://yahoo-weather5.p.rapidapi.com/weather?lat=59.934280&long=30.335098&format=json&u=f',
    {
      headers: {
        'x-rapidapi-key':
          '8a152d384amsh6ec58d1b6763541p1ca1adjsn572f1e7421ac',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
      } 
    }).subscribe(data => {
        this.response = data;
        console.log(data);
    })
  }
}

