import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dt02',
  templateUrl: './dt02.component.html',
  styleUrls: ['./dt02.component.css']
})
export class Dt02Component implements OnInit {
  stus = [
    { code: "10001", name: "张光节", sex: "男", score: 70 },
    { code: "10002", name: "刘晶晶", sex: "女", score: 80 },
    { code: "10003", name: "李明", sex: "男", score: 60 },
    { code: "10004", name: "陈月明", sex: "女", score: 90 },
    { code: "10005", name: "孙大力", sex: "男", score: 50 }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
