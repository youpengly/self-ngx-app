import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { zip } from 'rxjs/observable/zip';

@Component({
    selector: 'app-dashboard-monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.css']
})
export class DashboardMonitorComponent implements OnInit, OnDestroy {


    constructor(private http: HttpClient, public msg: NzMessageService) { }

    ngOnInit() {
    }



    ngOnDestroy(): void {
    }
}
