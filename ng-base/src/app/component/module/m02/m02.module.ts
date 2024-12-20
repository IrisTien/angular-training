import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { M02Component } from './m02.component';

const routes: Routes = [
  { path: '', component: M02Component }
];

import { Config,configToken } from "src/app/component/shared/config";

export const configVaue:Config= {
  apiEndPoint :"xxx.com",
  timeout :400
}

@NgModule({
  declarations: [M02Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[{
    provide:configToken, useValue:configVaue
  }]
})
export class M02Module { }
