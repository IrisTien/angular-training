import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  str = ""
  blnIf = false;
  title_list = ["编号", "内容", "操作"]
  li_list = [{
    code: "1001",
    href: "http://www.baidu.com",
    content: "百度"
  }, {
    code: "1002",
    href: "http://www.sina.com.cn",
    content: "新浪"
  }, {
    code: "1003",
    href: "http://www.163.com",
    content: "网易"
  }];
  pclk(_str: string) {
    this.str = _str;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
