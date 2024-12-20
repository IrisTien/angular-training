import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// 引入路由守卫
import { MycanactiveGuard } from './mycanactive.guard';

import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ThreeComponent } from './component/three/three.component';
import { FourComponent } from './component/four/four.component';
import { FiveComponent } from './component/five/five.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/parent/component/child/child.component';
import { ChildTitleComponent } from './component/parent/component/child-title/child-title.component';
import { BaseComponent } from './component/template/base/base.component';
import { ViewchildComponent } from './component/template/viewchild/viewchild.component';
import { TwowaybindComponent } from './component/template/twowaybind/twowaybind.component';
import { TwbchildComponent } from './component/template/twowaybind/component/twbchild/twbchild.component';
import { Dt01Component } from './component/directive/dt01/dt01.component';
import { Dt02Component } from './component/directive/dt02/dt02.component';
import { Dt03Component } from './component/directive/dt03/dt03.component';
import { Dt03BtnComponent } from './component/directive/dt03-btn/dt03-btn.component';
import { Dt04Component } from './component/directive/dt04/dt04.component';
import { TabComponent } from './component/directive/dt04/component/tab/tab.component';
import { TabListComponent } from './component/directive/dt04/component/tab-list/tab-list.component';
import { Dt05Component } from './component/directive/dt05/dt05.component';
import { LogDirective } from './component/directive/dt05/log.directive';
import { ClkDirective } from './component/directive/dt05/clk.directive';
import { Log2Directive } from './component/directive/dt05/log2.directive';
import { Clk2Directive } from './component/directive/dt05/clk2.directive';
import { NotfoundpageComponent } from './component/notfoundpage/notfoundpage.component';
import { Rt01Component } from './component/router/rt01/rt01.component';
import { LoginComponent } from './component/login/login.component';
import { IndexComponent } from './component/index/index.component';

import { Config,configToken } from "./component/shared/config";
import { Frm01Component } from './component/form/frm01/frm01.component';
import { Frm02Component } from './component/form/frm02/frm02.component';
import { Htp01Component } from './component/http/htp01/htp01.component';
import { Htp02Component } from './component/http/htp02/htp02.component';
import { PppComponent } from './component/changedele/ppp/ppp.component';
import { CccComponent } from './component/changedele/ccc/ccc.component';
import { Htp03Component } from './component/http/htp03/htp03.component';
import { GggComponent } from './component/changedele/ggg/ggg.component';
import { DddComponent } from './component/changedele/ddd/ddd.component';
import { EeeComponent } from './component/changedele/eee/eee.component';
import { FffComponent } from './component/changedele/fff/fff.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { MyPipeComponent } from './component/mypipe/mypipe.component';
import { OrderbyPipe } from './orderby.pipe';

export const configVaue:Config= {
  apiEndPoint :"zzz.com",
  timeout :400
}

// "**" 必须放置在最后一行，否则之前的路由都不会识别
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'three',
    component: ThreeComponent
  },
  {
    path: 'four',
    component: FourComponent
  },
  {
    path: 'five',
    component: FiveComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'base',
    component: BaseComponent
  },
  {
    path: 'viewchild',
    component: ViewchildComponent
  },
  {
    path: 'twb',
    component: TwowaybindComponent
  },
  {
    path: 'dt01',
    component: Dt01Component
  },
  {
    path: 'dt02',
    component: Dt02Component
  },
  {
    path: 'dt03',
    component: Dt03Component
  },
  {
    path: 'dt04',
    component: Dt04Component
  },
  {
    path: 'dt05',
    component: Dt05Component,
    canActivate: [MycanactiveGuard]
  },
  {
    path: 'rt01',
    component: Rt01Component,
    data: {
      title: "这是一个非常重要的页面哦！"
    }
  },
  {
    path: 'rt02/:id',
    component: Rt01Component,
    data: {
      title: "这是一个非常重要的页面哦2！"
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'm01', loadChildren: () => import('./component/module/m01/m01.module').then(m => m.M01Module) },
  { path: 'm02', loadChildren: () => import('./component/module/m02/m02.module').then(m => m.M02Module) },
  { path: 'm03', loadChildren: () => import('./component/module/m03/m03.module').then(m => m.M03Module) },
  {
    path: 'frm01',
    component: Frm01Component
  },
  {
    path: 'frm02',
    component: Frm02Component
  },
  {
    path: 'htp01',
    component: Htp01Component
  },
  {
    path: 'htp02',
    component: Htp02Component
  },
  {
    path: 'htp03',
    component: Htp03Component
  },
  {
    path: 'ppp',
    component: PppComponent
  },
  {
    path: 'ggg',
    component: GggComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'mypipe',
    component: MyPipeComponent
  },
  {
    path: '**',
    component: NotfoundpageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    ParentComponent,
    ChildComponent,
    ChildTitleComponent,
    BaseComponent,
    ViewchildComponent,
    TwowaybindComponent,
    TwbchildComponent,
    Dt01Component,
    Dt02Component,
    Dt03Component,
    Dt03BtnComponent,
    Dt04Component,
    TabComponent,
    TabListComponent,
    Dt05Component,
    LogDirective,
    ClkDirective,
    Log2Directive,
    Clk2Directive,
    NotfoundpageComponent,
    Rt01Component,
    LoginComponent,
    IndexComponent,
    Frm01Component,
    Frm02Component,
    Htp01Component,
    Htp02Component,
    PppComponent,
    CccComponent,
    Htp03Component,
    GggComponent,
    DddComponent,
    EeeComponent,
    FffComponent,
    PipeComponent,
    MyPipeComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //一定要放置在BrowserModule之后
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      // enableTracing:true
    })
  ],
  providers: [{
    provide:configToken, useValue:configVaue
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
