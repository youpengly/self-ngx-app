import { zip } from 'rxjs/observable/zip';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dashboard-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class DashboardWorkplaceComponent implements OnInit, OnDestroy {


  constructor(private http: HttpClient, public msg: NzMessageService) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }
}
