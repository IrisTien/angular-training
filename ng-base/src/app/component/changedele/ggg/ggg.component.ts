import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ggg',
  templateUrl: './ggg.component.html',
  styleUrls: ['./ggg.component.css']
})
export class GggComponent implements OnInit {

  constructor() { }
  data: any = {
    name: '张三',
    address: '上海'
  };
  changeInfo() {
    // @Input 引用发生变化
    this.data = {
      address: '北京',
      name: '李小明'
    }
  }
  ngOnInit(): void { }
}
