import { Component } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart, NavigationError } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-layout-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css']
})
export class LayoutDefaultComponent {
    isFetching = false;

    constructor(
        router: Router,
        private _message: NzMessageService,
    ) {
        // scroll to top in change page
        router.events.subscribe(evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError) {
                this.isFetching = false;
                _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            setTimeout(() => {
                this.isFetching = false;
            }, 100);
        });
    }
}
