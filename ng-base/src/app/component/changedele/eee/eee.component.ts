import { Component, Input, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable,interval } from "rxjs"
import { map } from "rxjs/operators"

@Component({
  selector: 'app-eee',
  templateUrl: './eee.component.html',
  styleUrls: ['./eee.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EeeComponent implements OnInit, OnChanges {
  @Input() data: any;
  count$: Observable<number>;
  
  constructor() { }

  ngOnInit(): void {
    this.count$ = interval(1000)
      .pipe(map((count: number) => ++count)
    );

  }
  ngOnChanges() {
    console.log('已修改的数据是: ' + this.data.name + ' ' + this.data.address);
  }

}
