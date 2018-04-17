import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
// dashboard pages

// passport pages
import { LoginComponent } from './passport/login/login.component';
// single pages


const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ]
    },
    // passport
    {
        path: 'login',
        component: LoginComponent,
    },
    // 单页不包裹Layout

    { path: '**', redirectTo: 'login' }
];

// console.log(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
    exports: [RouterModule]
  })
export class RouteRoutingModule { }
