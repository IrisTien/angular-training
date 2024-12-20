import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dt03-btn',
  templateUrl: './dt03-btn.component.html',
  styleUrls: ['./dt03-btn.component.css']
})
export class Dt03BtnComponent implements OnInit {
  str = "";
  i=0;
  constructor() { }
  onClick(){
    this.i++;
    this.str="我点击了 "+this.i+" 次。"
  }
  ngOnInit(): void {
  }

}
