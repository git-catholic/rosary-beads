// child.component.ts
import { Component, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<button (click)="sendMessage()">Send Message to Parent</button>`
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