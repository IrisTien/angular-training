import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/component/shared/config.service'
@Component({
  selector: 'app-m03',
  templateUrl: './m03.component.html',
  styleUrls: ['./m03.component.css']
})
export class M03Component implements OnInit {

  constructor(private configService:ConfigService) { }

  ngOnInit(): void {
    console.log(this.configService.getValue());
  }

}
