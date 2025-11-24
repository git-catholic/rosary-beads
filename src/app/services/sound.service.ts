import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  tap1: HTMLAudioElement;

  tap2: HTMLAudioElement;

  constructor() { }

  playSound(feedbackId: string): void {
    if ('short' === feedbackId) {
      this.tap1?.play();
    }
    else if ('long' === feedbackId) {
      this.tap2?.play();
    }
  }

}
