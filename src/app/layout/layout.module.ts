import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { LayoutDefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { HeaderUserComponent } from './default/header/components/user.component';


const COMPONENTS = [
    LayoutDefaultComponent,
    HeaderComponent,
    SidebarComponent
];

const HEADERCOMPONENTS = [
    HeaderUserComponent
];

// passport
const PASSPORT = [
];

@NgModule({
    imports: [SharedModule],
    providers: [],
    declarations: [
        ...COMPONENTS,
        ...HEADERCOMPONENTS,
        ...PASSPORT
    ],
    exports: [
        ...COMPONENTS,
        ...PASSPORT
    ]
})
export class LayoutModule { }
