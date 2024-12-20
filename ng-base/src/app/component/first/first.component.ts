import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  message = '正在加载中...';

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.message = Date.now().toString();
    }, 1000);
  }

}
