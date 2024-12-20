import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
// 使用响应式表单之前，一定要在 app.module中导入 ReactiveFormsModule 模块
export function validateNotString(control: AbstractControl) {
  return (!isNaN(control.value)) ?
    null :
    {
      _validateNotString: {
        valid: false
      }
    }
}

@Component({
  selector: 'app-frm02',
  templateUrl: './frm02.component.html',
  styleUrls: ['./frm02.component.css']
})


export class Frm02Component implements OnInit {
  title = "用户登录"
  _tips: string = "准备提交...";

  constructor(private fb: FormBuilder) { }
  _frmLogin: FormGroup;
  ngOnInit(): void {
    this._frmLogin = this.fb.group({
      _name: this.fb.control("tgrong", [Validators.required, validateNotString]),
      _pass: this.fb.control("123456", Validators.required),
      _time: this.fb.control("2pm", Validators.required),
      _addr: this.fb.control("", Validators.required),
    })
  }
  onSubmitForm() {
    console.log('提交的数据 => ' + JSON.stringify(this._frmLogin.value));
    this._tips = "提交成功！"
  }


}
