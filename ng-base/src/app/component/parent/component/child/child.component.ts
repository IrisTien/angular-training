import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() href: string;  //输入型类属性，通过它接收父组件传入的值
  @Input() code: string;
  @Input() w: string;
  @Input() content: string;
  @Input() blnshow: boolean;

  @Output() clk = new EventEmitter(); //输出型类属性，暴露一个对象，
  cclk(c: string) {
    // 发生事件时，利用对象发事件
    this.clk.emit(c)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
