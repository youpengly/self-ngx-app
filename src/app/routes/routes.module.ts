import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';

// passport pages
import { LoginComponent } from './passport/login/login.component';
// single pages


@NgModule({
    imports: [ SharedModule, RouteRoutingModule ],
    declarations: [
        // passport pages
        LoginComponent,
        // single pages

    ]
})

export class RoutesModule {}
