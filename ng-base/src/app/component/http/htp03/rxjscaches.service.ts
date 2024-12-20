import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../htp02/htp02.interface";
import { map ,shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RxjscachesService {
    private cacheUsers$:Observable<Array<User>>;
    constructor(private http: HttpClient) { }

    get users() {
        if(!this.cacheUsers$){
            this.cacheUsers$ = this.requestUsers()
            .pipe(
                shareReplay()
            )
        }
       return this.cacheUsers$;
    }
    private requestUsers() {
        return this.http.get<Array<User>>("http://www.rttop.cn/api/?day=54&type=jy")
            .pipe(
                map(respone => respone)
            )
    }
}
