import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSiemaComponent } from './ngx-siema.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NgxSiemaComponent,
    ],
    exports: [
        NgxSiemaComponent,
    ],
})
export class NgxSiemaModule {
}