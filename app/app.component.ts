import { Component } from '@angular/core';
import {TimerComponent} from '../app/timer'
import {LevelComponent} from '../app/expupdate'

@Component({
  selector: 'my-app',
  template: `<div class="container"><div class="page"><h1>Hello  {{name}} <br> {{saludo}} <br> {{timer.minutos}} : {{timer.segundos | number: '2.0'}} </h1>
   <button (click)="timer.togglePause()" >{{timer.buttonLabel}}</button></div></div>
   <h2 class="header">&nbsp;Level <span >{{level.lvl}}</span></h2>
<div class="progress">
      <div class="determinate"  [style.width]="level.progressnumer + '%'"></div>
  </div>
  <div class="container" >
    <div class="card" (anadircart)='addCard()' (complete)='onClickcard()' *ngFor='let cart of level.cardlist' innerHTML = " {{cart}}" >
   
    
     
    </div>
  </div>
  
  
    <div class="fixed-action-btn">
    <a (click)="level.addCard()" class=" waves-effect waves-circle waves-light red btn-floating btn-large "><i class="material-icons">+</i></a>
    </div>
    
     <div class=" eliminar">
    <a (click)="level.onClickcard()" class=" waves-effect waves-circle waves-light blue btn-floating btn-large "><i class="material-icons">-</i></a>
    </div>`
})


export class AppComponent {
  saludo: string;
  name: string;
  timer: TimerComponent;
  level: LevelComponent;


  constructor() {
    this.saludo = 'HOLA ANGULAR 2';
    this.name = 'Angular';
    this.timer = new TimerComponent;
    this.level =  new LevelComponent;

  }

}






/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/