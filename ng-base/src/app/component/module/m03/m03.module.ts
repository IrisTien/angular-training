import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { M03Component } from './m03.component';

import { Config,configToken } from "src/app/component/shared/config";

const routes: Routes = [
  { path: '', component: M03Component }
];

export const configVaue:Config= {
  apiEndPoint :"yyy.com",
  timeout :400
}

@NgModule({
  declarations: [M03Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[{
    provide:configToken, useValue:configVaue
  }]
})
export class M03Module { }
