import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twbchild',
  templateUrl: './twbchild.component.html',
  styleUrls: ['./twbchild.component.css']
})
export class TwbchildComponent implements OnInit {
  @Input() size:number;
  @Output() sizeChange = new EventEmitter();

  dec(){
    this.resize(-1)
  }
  inc(){
    this.resize(+1)
  }

  resize(n:number){
    this.size = this.size+n;
    this.sizeChange.emit(this.size)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
