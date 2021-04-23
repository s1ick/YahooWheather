import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { WheatherService } from './../wheather.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit, AfterViewInit {
  @ViewChild('button') button!: ElementRef;
  constructor(public WheatherService: WheatherService , private http: HttpClient, ) { 
  }
  public response:any;
  ngOnInit(): void {

  }

  ngAfterViewInit(): void { 
      this.WheatherService.wheather();
      //WheatherService.response.current_observation.pubDate
  }
}
