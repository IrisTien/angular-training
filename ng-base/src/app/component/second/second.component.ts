import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  imgurl = "assets/log.png";
  stralt = "这是一张图片";
  num =4;
  font =200;
  red="red";
  blue="blue";
  blnCls=true;


  constructor() { }

  ngOnInit(): void {
  }

}
