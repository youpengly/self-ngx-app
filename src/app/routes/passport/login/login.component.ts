import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';

import { LoggerService } from '@core/log/logger.service';
import { AuthService } from '@core/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnDestroy {
  public loginForm: FormGroup;
  public error = '';
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private msg: NzMessageService,
    private modalSrv: NzModalService,
    private logger: LoggerService,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(6), Validators.pattern(/^[\w|\d]{3,6}$/)]],
      password: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(8), Validators.pattern(/^\S{1,8}$/), ]],
    });
  }

  get userName() { return this.loginForm.controls.username; }
  get password() { return this.loginForm.controls.password; }


  submit() {
    for (const i of Object.keys(this.loginForm.controls)) {
      this.loginForm.controls[ i ].markAsDirty();
      this.loginForm.controls[ i ].updateValueAndValidity();
    }
    if (this.loginForm.invalid) {
      this.logger.log('input error!');
      return;
    }
    // mock http
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      if (this.userName.value !== 'admin' || this.password.value !== '111') {
        this.error = `账号或密码错误`;
        return;
      }
      this.authService.setCurrentUser(this.userName.value, this.password.value);
      this.router.navigate(['/']);
    }, 1000);
  }

  ngOnDestroy() {
  }

}
