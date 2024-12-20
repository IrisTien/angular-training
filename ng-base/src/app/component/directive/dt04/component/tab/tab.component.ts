import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }
  @Input() tab: TabInterFace;
  printTitle() {
    console.log(this.tab.title)
  }
  printContent() {
    console.log(this.tab.content)
  }
  ngOnInit(): void {
  }
}
interface TabInterFace {
  title: string,
  content: string
}
