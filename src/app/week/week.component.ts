import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WheatherService } from './../wheather.service';
@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})

export class WeekComponent implements OnInit, AfterViewInit {
  constructor(public WheatherService: WheatherService ) { 
  }
  imgPath: string = '../../assets/images/';
  ngOnInit(): void {
  }
  ngAfterViewInit(): void { 
    this.WheatherService.wheather();
}
ConvertString(value: string){
  return parseFloat(value)
  }
}
