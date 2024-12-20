import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ThrowStmt } from '../../../../../node_modules/@angular/compiler';

@Directive({
  selector: '[appClk]',
  host: {
    "(click)": "onclick($event)"
  }
})
export class ClkDirective {
  num: number = 0;

  constructor(private element: ElementRef, private render: Renderer2) { }
  onclick() {
    const textContent = "click";
    this.num++;
    this.render.setProperty(this.element.nativeElement, "textContent", textContent + this.num.toString())
    if (this.num == 5) {
      this.render.setProperty(this.element.nativeElement, "disabled", "true")
    }
  }
}
