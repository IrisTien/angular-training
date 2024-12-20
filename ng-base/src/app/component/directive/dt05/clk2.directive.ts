import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appClk2]'
})
export class Clk2Directive {
  num: number = 0;
  @HostBinding("textContent")
  textcontent2: string = "click";

  @HostBinding("disabled")
  disabled2: boolean = false;
  

  @HostListener("click", ["$event"])
  onclick() {
    this.num++;
    this.textcontent2 = "click" + this.num;
    if (this.num == 5) {
      this.disabled2 = true;
    }
  }
  constructor() { }
}
