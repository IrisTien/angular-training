import { Directive, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLog2]',
  inputs: ['status', 'color', 'bg']
})
export class Log2Directive implements OnInit {

  status: string;
  color: string;
  bg: string;

  // 变量名称必须与输入的属性名称一致，否则无效
  @HostBinding("style.font-style")
  status2: string;
  @HostBinding("style.color")
  color2: string;
  @HostBinding("style.background-color")
  bg2: string;

  constructor() { }
  ngOnInit() {
    this.color2 = this.color
    this.status2 = this.status
    this.bg2 = this.bg
  }
}
