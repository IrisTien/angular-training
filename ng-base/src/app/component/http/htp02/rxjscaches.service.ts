import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "./htp02.interface";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RxjscachesService {
    constructor(private http: HttpClient) { }

    get users() {
        return this.requestUsers();
    }
    private requestUsers() {
        return this.http.get<Array<User>>("http://www.rttop.cn/api/?day=54&type=jy")
            .pipe(
                map(respone => respone)
            )
    }
}
