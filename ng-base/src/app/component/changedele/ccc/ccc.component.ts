import { Component, Input, OnChanges, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-ccc',
  templateUrl: './ccc.component.html',
  styleUrls: ['./ccc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CccComponent implements OnInit, OnChanges {

  @Input() data: any;

  constructor() { }

  ngOnInit() { }
  
  ngOnChanges() {
    console.log('已修改的数据是: ' + this.data.name + ' ' + this.data.address);
  }
}
