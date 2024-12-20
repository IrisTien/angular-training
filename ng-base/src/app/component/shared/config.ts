
import {InjectionToken} from '@angular/core'

export interface Config {
    apiEndPoint:string;
    timeout:number
}
export const configToken = new InjectionToken<Config>("demotoken");
