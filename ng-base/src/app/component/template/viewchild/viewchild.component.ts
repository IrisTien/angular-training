import { Component, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked {
  name: string = "tgrong";

  @ViewChild("title",{static:false})
  ctitle: ElementRef;

  @ViewChild("title2",{static:true})
  ctitle2: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("ctitle in ngOnInit->" + this.getTitleValue(this.ctitle))
    console.log("ctitle2 in ngOnInit->" + this.getTitleValue(this.ctitle2))
  }

  ngAfterContentInit(): void {
    console.log("ctitle in ngAfterContentInit->" + this.getTitleValue(this.ctitle))
    console.log("ctitle2 in ngAfterContentInit->" + this.getTitleValue(this.ctitle2))
  }

  ngAfterViewInit(): void {
    console.log("ctitle in ngAfterViewInit->" + this.getTitleValue(this.ctitle))
    console.log("ctitle2 in ngAfterViewInit->" + this.getTitleValue(this.ctitle2))
  }

  ngAfterViewChecked(): void {
    console.log("ctitle in ngAfterViewChecked->" + this.getTitleValue(this.ctitle))
    console.log("ctitle2 in ngAfterViewChecked->" + this.getTitleValue(this.ctitle2))
  }
  getTitleValue(v: ElementRef) {
    return v ? v.nativeElement.innerHTML : v
  }

}
