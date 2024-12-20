import { Component, Input, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ddd',
  templateUrl: './ddd.component.html',
  styleUrls: ['./ddd.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DddComponent implements OnInit, OnChanges {

  @Input() data: any;
  counter: number = 1;

  constructor() { }
  
  changeCounter() {
    this.counter++;
  }

  ngOnInit(): void {
    setInterval(() => this.counter++, 1000);
  }

  ngOnChanges() {
    console.log('已修改的数据是: ' + this.data.name + ' ' + this.data.address);
  }

}
