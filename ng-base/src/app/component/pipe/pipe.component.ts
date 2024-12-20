import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-four',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  
  constructor() { }
  myDate = Date.now();
  currDate : Observable<number>;
  ngOnInit(): void {
       interval(1000).subscribe(()=>{
           this.currDate = of(Date.now())
       })
  }
}
