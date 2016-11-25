

export class TimerComponent {
  minutos: number;
  segundos: number;
  isPaused: boolean;
  buttonLabel: string;
  resetTimer(): void {
    this.minutos = 59;
    this.segundos = 59;
    this.buttonLabel = 'DALE';
    this.togglePause();

  }
  constructor() {
    this.resetTimer();
    setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (!this.isPaused){
      this.buttonLabel= 'PARA!';
      if (--this.segundos < 0) {
        this.segundos = 59;
        if (--this.minutos < 0) {
          this.resetTimer();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutos < 59 || this.segundos < 59) {
      this.buttonLabel = this.isPaused ? 'Dale!' : 'Para!';

    }
  }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/