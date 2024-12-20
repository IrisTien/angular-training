import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular ';
  constructor(private router: Router) { }
  logout(){
    window.localStorage.removeItem("user");
    this.router.navigateByUrl("/");
  }
  goto(path) {
    this.router.navigate(['/rt01'], { fragment: path })
  }
  goto2(path) {
    this.router.navigate(['/rt02', "123"], { fragment: path })
  }
  goto3(path) {
    this.router.navigate(['/rt01', { a: 123, b: 456 }], { fragment: path })
  }
  goto4(path) {
    this.router.navigate(['/rt01'], { queryParams: { id: 789 }, fragment: path })
  }
}
