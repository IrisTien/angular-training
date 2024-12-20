import { Component, OnInit } from '@angular/core';
import { RxjscachesService } from "./rxjscaches.service";
import { User } from "./htp02.interface";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-htp02',
  templateUrl: './htp02.component.html',
  styleUrls: ['./htp02.component.css']
})

export class Htp02Component implements OnInit {

   users$: Observable<Array<User>>;

    constructor(private rxjsCacheService: RxjscachesService) { }

    ngOnInit() {
        this.users$ = this.rxjsCacheService.users;
    }

}
