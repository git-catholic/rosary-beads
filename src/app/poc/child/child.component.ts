// child.component.ts
import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { SwipeComponent } from '../swipe/swipe.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [SwipeComponent],
  template: `<app-swipe></app-swipe><button (click)="sendMessage()">Send Message to Parent</button>`
})
export class ChildComponent {
  // @Output()
  // messageEmitter = new EventEmitter<string>();

  constructor(@Inject('onMessageEvent') private onMessageEvent: (message: string) => void) { }

  sendMessage() {
    // console.log(`emitting message - ${this.messageEmitter?.observed}`);
    // this.messageEmitter.emit('Hello from child!');
    this.onMessageEvent('Hello from the child!');
  }
}