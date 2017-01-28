import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSiemaComponent } from './ngx-siema.component';
import { NgxSiemaSlideComponent } from './ngx-siema-slide';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgxSiemaComponent,
    NgxSiemaSlideComponent,
  ],
  exports: [
    NgxSiemaComponent,
    NgxSiemaSlideComponent,
  ],
})
export class NgxSiemaModule {
}
