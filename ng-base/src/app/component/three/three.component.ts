import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  imgurl = ["assets/log.png", "assets/cat.jpeg"];
  idxurl = 0;
  w = 80;
  blnc = false;
  constructor() { }

  onchange() {
    if (!this.blnc) {
      this.blnc = true;
      this.idxurl = 1;
      this.w = 310;
    } else {
      this.blnc = false;
      this.idxurl = 0;
      this.w = 80;
    }
  }
  ngOnInit(): void {
  }

}
