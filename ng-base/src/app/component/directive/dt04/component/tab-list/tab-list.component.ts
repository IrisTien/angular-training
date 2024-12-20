import { Component, OnInit,AfterContentInit,ContentChildren,QueryList,AfterContentChecked } from '@angular/core';
import { TabComponent } from '../tab/tab.component'
@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements OnInit,AfterContentInit,AfterContentChecked {
  // 使用ContentChildren获取包含子组件TabComponent的列表QueryList
  // 因为使用 ng-content 加载的子组件TabComponent，所以只能在这个父组件中编写
  @ContentChildren(TabComponent) tablist:QueryList<TabComponent>;
 
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    let arr = this.tablist.toArray();
    arr[0].printTitle();
    arr[0].printContent();
    arr[1].printTitle();
    arr[1].printContent();
    arr[2].printTitle();
    arr[2].printContent();
    console.log("ngAfterContentInit触发了")
  }
  ngAfterContentChecked(): void {
    let arr = this.tablist.toArray();
    arr[0].printTitle();
    arr[0].printContent();
    arr[1].printTitle();
    arr[1].printContent();
    arr[2].printTitle();
    arr[2].printContent();
    console.log("ngAfterContentChecked触发了")
  }
}
