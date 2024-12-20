import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-rt01',
  templateUrl: './rt01.component.html',
  styleUrls: ['./rt01.component.css']
})
export class Rt01Component implements OnInit {
  title: string;
  fragment: string;
  a: string;
  b: string;
  id: string;
  arrStu = [{
    id: "10101", name: "张三"
  }, {
    id: "10102", name: "李四"
  }, {
    id: "10103", name: "王二"
  }]
  constructor(private aroute: ActivatedRoute) {}

  ngOnInit(): void {
    let _snapshot = this.aroute.snapshot
    this.title = _snapshot.data["title"];
    
    // 订阅fragment路径快照获取选项参数
    if(_snapshot.params.id)
      this.id = _snapshot.params.id

    // 订阅fragment路径快照
    this.aroute.params.subscribe(params => {
      this.a = params.a
      this.b = params.b
    })

    // 订阅fragment路径快照
    this.aroute.fragment.subscribe(fragment => {
      this.fragment = fragment
    })

    // 订阅fragment路径快照
    this.aroute.queryParams.subscribe(queryParams => {
      if(queryParams.id)
        this.id = queryParams.id
    })
  }

}
