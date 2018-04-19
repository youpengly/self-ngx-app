import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
// dashboard pages
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';

// passport pages
import { LoginComponent } from './passport/login/login.component';
// single pages


const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            { path: '', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
            { path: 'dashboard/v1', component: DashboardV1Component },
            { path: 'dashboard/analysis', component: DashboardAnalysisComponent },
            { path: 'dashboard/monitor', component: DashboardMonitorComponent },
            { path: 'dashboard/workplace', component: DashboardWorkplaceComponent },
        ]
    },
    // passport
    {
        path: 'login',
        component: LoginComponent,
    },
    // 单页不包裹Layout

    { path: '**', redirectTo: 'dashboard' }
];

// console.log(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
    exports: [RouterModule]
})
export class RouteRoutingModule { }
