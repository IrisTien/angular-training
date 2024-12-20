import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycanactiveGuard implements CanActivate {
  constructor(private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = window.localStorage.getItem("user")
    console.log(user)
    if (!user) {
      this.router.navigateByUrl("/login");
      console.log("sdfd");
      return false;
    }
    return true;
  }
}
