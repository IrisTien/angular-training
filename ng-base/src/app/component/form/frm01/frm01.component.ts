import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frm01',
  templateUrl: './frm01.component.html',
  styleUrls: ['./frm01.component.css']
})
export class Frm01Component implements OnInit {
  title = "用户登录"
  _name:string = "tgrong";
  _pass:string = "123456";
  _time:string = "2pm";
  _addr:string = "";
  _tips:string = "准备提交...";
  constructor() { }
  onSubmitForm(value){
    console.log('提交的数据 => '+JSON.stringify(value));
    this._tips="提交成功！"
  }
  ngOnInit(): void {
  }

}
