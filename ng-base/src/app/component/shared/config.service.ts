import { Injectable, Inject } from '@angular/core';

import { Config, configToken } from "./config"

@Injectable({
  providedIn: 'any'
  // root 表示仅创建了一个单例服务
  // any 对于延迟的模块，每个模块可以创建自己的实例
})
export class ConfigService {

  constructor(@Inject(configToken) private config: Config) {
    console.log("创建了一个新的服务")
  }
  getValue() {
    return this.config;
  }
}
