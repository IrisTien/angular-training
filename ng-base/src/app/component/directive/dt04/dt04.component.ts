import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dt04',
  templateUrl: './dt04.component.html',
  styleUrls: ['./dt04.component.css']
})
export class Dt04Component implements OnInit {
  tabs = []
  constructor() { }

  ngOnInit(): void {
    this.tabs = [
      {title:"title",content:"content"},
      {title:"title2",content:"content2"},
      {title:"title3",content:"content3"}
    ]
  }

}
