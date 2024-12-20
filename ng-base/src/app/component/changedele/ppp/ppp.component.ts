import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppp',
  templateUrl: './ppp.component.html',
  styleUrls: ['./ppp.component.css']
})
export class PppComponent implements OnInit {

  constructor() { }

  data: any = {
    name: '张三',
    address: '上海'
  };

  changeInfo() {
    this.data.address = '北京';
    this.data.name = '李小明';
  }

  ngOnInit(): void {

  }

}
