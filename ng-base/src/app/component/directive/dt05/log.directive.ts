import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appLog]',
  inputs: ['status', 'color']
})

export class LogDirective implements OnInit {
  // 如果不在 inputs 中定义，则可以在@Input装饰器中声明
  @Input() bg: string;

  constructor(private element: ElementRef, private render: Renderer2) { }
  // 变量名称必须与输入的属性名称一致，否则无效
  status: string;
  color: string;
  ngOnInit() {
    this.render.setStyle(this.element.nativeElement, "font-style", this.status)
    this.render.setStyle(this.element.nativeElement, "color", this.color)
    this.render.setStyle(this.element.nativeElement, "background-color", this.bg)
  }

}
