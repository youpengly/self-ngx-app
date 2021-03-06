import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SettingsService } from './setting/setting.service';



// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
const THIRDMODULES = [
    NgZorroAntdModule,
];
// endregion

// region: your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
const INTERFACES = [];
// endregion

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        // third libs
        ...THIRDMODULES
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    providers: [SettingsService],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
        ...INTERFACES
    ]
})
export class SharedModule { }
