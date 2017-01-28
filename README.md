[![Build Status](https://travis-ci.org/LexZhukov/ngx-siema.svg?branch=master)](https://travis-ci.org/LexZhukov/ngx-siema)

# ngx-siema

Lightweight and simple carousel with no dependencies.

### Demo

![ngx-siema](assets/img/demo.gif)

## Installation

`npm install ngx-siema --save`

or

`yarn add ngx-siema`


> - **ngx-siema** require installed **siema** package for correct work (`npm install siema --save`).

## Sample

Include NgxSiemaModule in your main module:

```javascript
import { NgxSiemaModule} from 'ngx-siema';

@NgModule({
  // ...
  imports:      [
    NgxSiemaModule
  ],
  // ...
})
export class AppModule { }
```

Then use in your component:

```javascript
import { Component, OnInit } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';

@Component({
  selector: 'sample',
  template: `
      <ngx-siema ngxClass="my-siema"
         [options]="options"
         (onPrev)="prev($event)"
         (onNext)="next($event)"
         (onGoTo)="goTo($event)">
    	  <ngx-siema-slide>
    	    <img src="assets/siema--pink.svg">
    	  </ngx-siema-slide>
    	  <ngx-siema-slide>
    	    <img src="assets/siema--yellow.svg">
    	  </ngx-siema-slide>
    	  <ngx-siema-slide>
    	    <img src="assets/siema--pink.svg">
    	  </ngx-siema-slide>
      </ngx-siema>
  `
})
export class Sample implements OnInit {
    options: NgxSiemaOptions;

    ngOnInit() {
        this.options = {
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            threshold: 20,
            loop: false,
        };
    }
}
```

Example of usage with the navigation buttons:

```javascript
import { Component, ViewChild } from '@angular/core';
import { NgxSiemaComponent } from 'ngx-siema';

@Component({
  selector: 'sample',
  template: `
      <ngx-siema>
    	  <ngx-siema-slide>
    	    <img src="assets/siema--pink.svg">
    	  </ngx-siema-slide>
    	  <ngx-siema-slide>
    	    <img src="assets/siema--yellow.svg">
    	  </ngx-siema-slide>
    	  <ngx-siema-slide>
    	    <img src="assets/siema--pink.svg">
    	  </ngx-siema-slide>
      </ngx-siema>
      <button (click)="prev()">Prev</button>
      <button (click)="next()">Next</button>
      <button (click)="goTo(2)">GoTo</button>
  `
})
export class Sample {
    @ViewChild(NgxSiemaComponent) siema;

    prev() {
        this.siema.prev();
    }

    next() {
        this.siema.next();
    }

    goTo(slide: number) {
        this.siema.goto(slide);
    }
}
```

## License
[MIT](LICENSE) license.
