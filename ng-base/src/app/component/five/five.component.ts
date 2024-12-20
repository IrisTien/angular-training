import { Component, OnChanges, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  str="正在测试中..."
  constructor() { }

  ngOnInit(): void {
    console.log("1.ngOnInit-> 初始化指令和数据")
  }

  ngOnChanges(): void {
    console.log("2.")
  }
  ngOnDestroy(): void {
    console.log("7.ngOnDestroy-> 组件被销掉")
  }
  ngDoCheck(): void {
    console.log("2.ngDoCheck-> 查看变更检测")
  }
  ngAfterContentInit(): void {
    console.log("3.ngAfterContentInit-> 组件内容初始化")
  }
  ngAfterContentChecked(): void {
    console.log("4.ngAfterContentChecked-> 查看组件内容变更")
  }
  ngAfterViewChecked(): void {
    console.log("6.ngAfterViewChecked-> 查看视图内容变更")
  }
  ngAfterViewInit(): void {
    console.log("5.ngAfterViewInit-> 视图内容初始化")
  }


}
