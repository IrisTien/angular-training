import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/component/shared/config.service'
@Component({
  selector: 'app-m02',
  templateUrl: './m02.component.html',
  styleUrls: ['./m02.component.css']
})
export class M02Component implements OnInit {

  constructor(private configService:ConfigService) { }

  ngOnInit(): void {
     console.log(this.configService.getValue());
  }

}
