import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@core/auth/auth.service';

@Component({
    selector: 'app-header-user',
    template: `
    <nz-dropdown nzPlacement="bottomRight">
        <div class="item d-flex align-items-center px-sm" nz-dropdown>
            {{user?.name}}
        </div>
        <div nz-menu class="width-sm">
            <div nz-menu-item ><i class="anticon anticon-setting mr-sm"></i>设置</div>
            <li nz-menu-divider></li>
            <div nz-menu-item (click)="logout()"><i class="anticon anticon-setting mr-sm"></i>退出登录</div>
        </div>
    </nz-dropdown>
    `
})
export class HeaderUserComponent implements OnInit {
    public user = {
        name: '',
    };
    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.user.name = this.authService.getCurrentUser().username;
    }

    logout() {
        this.router.navigate(['/login']);
    }
}
