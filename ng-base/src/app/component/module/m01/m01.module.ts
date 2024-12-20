import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { M01Component } from './m01.component';


const routes: Routes = [
  { path: '', component: M01Component }
];

@NgModule({
  declarations: [M01Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class M01Module { }
