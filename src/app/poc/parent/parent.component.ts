// parent.component.ts
import { Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  childComponentType = ChildComponent;
  injector: Injector;
  receivedMessage: string = '';

  // childOutputs = {
  //   messageEmitter: (message: string) => this.handleChildMessage(message)
  // };

  constructor() {
    this.injector = Injector.create({
      providers: [
        { provide: 'onMessageEvent', useValue: (message: string) => this.handleChildMessage(message) }
      ]
    })
  }

  handleChildMessage(message: string) {
    console.log('Parent received 1:', message);
    this.receivedMessage = message;
    console.log('Parent received 2:', message);
  }

  onChildMessage(message: string) {
    console.log('Parent received 1 (direct):', message);
    this.receivedMessage = message;
    console.log('Parent received 2 (direct):', message);
  }

}