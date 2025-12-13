import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DeviceDetailsComponent } from '../device-details/device-details.component';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-main-config',
  standalone: true,
  imports: [
    CommonModule,
    DeviceDetailsComponent
  ],
  templateUrl: './main-config.component.html',
  styleUrls: ['./main-config.component.scss']
})
export class MainConfigComponent implements OnInit {

  activeTab = 'device';

  constructor(private location: Location) { }

  ngOnInit(): void { }

  onActivateTab(activateTab: string): void {
    this.activeTab = activateTab;
  }

  onClose(): void {
    this.location.back();
  }

  tabStateClass(tabName: string): string {
    return (this.activeTab && this.activeTab === tabName)
      ? 'selected-tab'
      : 'unselected-tab';
  }
}
