import { Component } from '@angular/core';
import {TimerComponent} from '../app/timer'

@Component({
  selector: 'my-app',
  template: `<div class="container"><div class="page"><h1>Hello  {{name}} <br> {{saludo}} <br> {{timer.minutos}} : {{timer.segundos | number: '2.0'}} </h1>
   <button (click)="timer.togglePause()" >{{timer.buttonLabel}}</button></div></div>`
})


export class AppComponent {
  saludo: string;
  name: string;
  timer: TimerComponent;

  constructor() {
    this.saludo = 'HOLA ANGULAR 2';
    this.name = 'Angular';
    this.timer = new TimerComponent;

  }

}






/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/