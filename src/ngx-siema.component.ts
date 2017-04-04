import { Component, Input, Output, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import Siema from 'siema';

import { NgxSiemaOptions } from './ngx-siema.options';

@Component({
  selector: 'ngx-siema',
  template: `
    <div class="{{ngxClass}}">
        <ng-content select="ngx-siema-slide"></ng-content>
    </div>
  `,
})
export class NgxSiemaComponent implements AfterViewInit, OnDestroy {
  @Input() options: NgxSiemaOptions;
  @Input() ngxClass: string = 'siema';

  @Output() onNext = new EventEmitter<any>();
  @Output() onPrev = new EventEmitter<any>();
  @Output() onGoTo = new EventEmitter<any>();

  private instance: any;

  ngAfterViewInit() {
    this.options.selector = `.${this.ngxClass}`;
    this.instance = new Siema(this.options);
  }

  ngOnDestroy() {
    this.instance.destroy();
    this.instance = null;
  }

  next(numbers: number = 1) {
    this.instance.next(numbers);
    this.onNext.emit({
      currentSlide: this.instance.currentSlide,
    });
  }

  prev(numbers: number = 1) {
    this.instance.prev(numbers);
    this.onPrev.emit({
      currentSlide: this.instance.currentSlide,
    });
  }

  goTo(index: number) {
    this.instance.goTo(index);
    this.onGoTo.emit({
      currentSlide: this.instance.currentSlide,
    });
  }
}
