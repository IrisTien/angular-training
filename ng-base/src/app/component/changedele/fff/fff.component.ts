import { Component, Input, OnChanges, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-fff',
  templateUrl: './fff.component.html',
  styleUrls: ['./fff.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FffComponent implements OnInit, OnChanges {
  @Input() data: any;
  
  counter: number = 1;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.counter = this.counter + 20;
      this.cd.detectChanges();
    }, 1000);
  }

  ngOnChanges() {
    console.log('已修改的数据是: ' + this.data.name + ' ' + this.data.address);
  }

}
