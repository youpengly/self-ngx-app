import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-dashboard-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.css']
})
export class DashboardAnalysisComponent implements OnInit {


    constructor(private http: HttpClient, public msg: NzMessageService) { }

    ngOnInit() {

    }


}
