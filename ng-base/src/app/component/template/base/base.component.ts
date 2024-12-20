import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  _phone = "";
  _phone2 = "";
  callPhone(str: string) {
    this._phone = str;
  }
  callPhone2(str: string) {
    this._phone2 = str;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
