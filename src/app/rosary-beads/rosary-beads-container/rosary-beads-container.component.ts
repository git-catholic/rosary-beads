import { AfterViewInit, Component, EventEmitter, Injector, Input, OnInit, Output, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { RosaryBeads } from '../rosary-beads';
import { AppRoutingModule } from "../../app-routing.module";
import { PatsBeadsComponent } from '../pats-beads/pats-beads.component';
import { Sequence } from '../../models/sequence';

@Component({
  selector: 'app-rosary-beads-container',
  standalone: true,
  templateUrl: './rosary-beads-container.component.html',
  styleUrl: './rosary-beads-container.component.scss',
  imports: [CommonModule]
})
export class RosaryBeadsContainerComponent implements OnInit, AfterViewInit, RosaryBeads {

  readonly supportedBeadIds = new Map<any, boolean>([
    [ PatsBeadsComponent, true ]
  ])

  injector: Injector;

  @Input()
  rosaryBeadsType: Type<any>;

  @Output()
  activeBeadsEvent = new EventEmitter<any>;


  @ViewChild('activeBeads', { static: true })
  activeBeadsRef!: TemplateRef<any>;

  activeBeads!: RosaryBeads;

  constructor() {
    console.log(`inject something?`)
    this.injector = Injector.create({
      providers: [
        { provide: 'activeBeadsEvent', useValue: (activeBeads: RosaryBeads) => this.onActiveBeads(activeBeads) }
      ]
    });
  }
  
  ngOnInit(): void {
    console.log(`RosaryBeadsContainerComponent - ngOnInit`);
  }

  ngAfterViewInit(): void {
    console.log(`RosaryBeadsContainerComponent - ngAfterViewInit`);
  }

  getActiveBeadDetails(): Sequence {
    return this.activeBeads?.getActiveBeadDetails();
  }

  getActiveBeadsType() {
    console.log(`RosaryBeadsContainerComponent - getActiveBeadsType`);
    return PatsBeadsComponent;
  }

  onActiveBeads(activeBeads: RosaryBeads) {
    this.activeBeads = activeBeads;
    console.log(`onActiveBeads - ${activeBeads}`);
    this.activeBeadsEvent.emit(activeBeads);
  }

  get isPatsBeadsComponent(): boolean {
    return this.rosaryBeadsType instanceof PatsBeadsComponent;
  }

  id: string;
  name?: string;
  maxTimes?: number;
  currentIndex: number;
  sequenceIndex: number;

  get highlightStyle(): string {
    return this.activeBeads?.highlightStyle;
  }

  initHolyRosarySequence(): void {
    this.activeBeads?.initHolyRosarySequence();
  }

  updateBeadPosition(prayerIdx: number): void {
    console.log(`updateBeadPosition (container): prayerIdx = ${prayerIdx} - ${this.activeBeads}`);
    this.activeBeads?.updateBeadPosition(prayerIdx);
  }

  updateBeadPositionSequence(beadPositionSequence: Sequence[]): void {
    this.activeBeads?.updateBeadPositionSequence(beadPositionSequence);
  }

  hasNext(): boolean {
    console.log(`container hasNext called`);
    return this.activeBeads?.hasNext();
  }

  hasPrevious(): boolean {
    console.log(`container hasPrevious called`);
    return this.activeBeads?.hasPrevious();
  }

  next(prayer?: Sequence): Sequence {
    console.log(`container next called`);
    return this.activeBeads?.next(prayer);
  }

  previous(prayer?: Sequence): Sequence {
    console.log(`container previous called`);
    return this.activeBeads?.previous(prayer);
  }

  start(): Sequence {
    console.log(`container start called`);
    return this.activeBeads?.start();
  }

  end(): Sequence {
    console.log(`container end called`);
    return this.activeBeads?.end();
  }

}
