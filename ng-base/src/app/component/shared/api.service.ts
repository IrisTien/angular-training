import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHello(_day: string) {
    let _option = {
      'Authorization': '1236777'
    }
    const headers = new HttpHeaders(_option);
    return this.http.get("http://www.rttop.cn/api/?", {
      responseType: 'text',
      observe: "response",
      params: {
        day: _day
      }
    })
  }
}
