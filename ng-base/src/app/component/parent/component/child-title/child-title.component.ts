import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-title',
  templateUrl: './child-title.component.html',
  styleUrls: ['./child-title.component.css']
})
export class ChildTitleComponent implements OnInit {
  @Input() code:string;
  @Input() content: string;
  @Input() action: string;
  @Input() w: string;
  constructor() { }

  ngOnInit(): void {
  }

}
