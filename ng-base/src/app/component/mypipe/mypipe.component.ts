import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './mypipe.component.html',
  styleUrls: ['./mypipe.component.css']
})

export class MyPipeComponent implements OnInit {

  constructor() { }
  fruits: Array<String> = ["aabb", "bbcc", "ccdd"]
  ngOnInit(): void { 

  }

}
