import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dt01',
  templateUrl: './dt01.component.html',
  styleUrls: ['./dt01.component.css']
})
export class Dt01Component implements OnInit {
  blnShow: boolean = false;
  constructor() { }
  toggle(){
    this.blnShow=!this.blnShow;
  }
  ngOnInit(): void {
  }

}
