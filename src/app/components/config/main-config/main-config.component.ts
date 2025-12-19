import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceDetailsComponent } from '../device-details/device-details.component';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HOLY_ROSARY_HOME } from '../../../app-routing.module';

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

  private source: string
  
  constructor(route: ActivatedRoute,
              private router: Router,
              private location: Location) {
    this.source = route.snapshot.paramMap.get('source');
  }

  ngOnInit(): void {
    console.log(`ngOnInit - source: "${this.source}"`);
  }

  onActivateTab(activateTab: string): void {
    this.activeTab = activateTab;
  }

  onClose(): void {
    console.log(`onClose - source: "${this.source}"`);
    if (this.source === HOLY_ROSARY_HOME) {
      this.router.navigate([HOLY_ROSARY_HOME]);
    }
    else {
      this.location.back();
    }
  }

  tabStateClass(tabName: string): string {
    return (this.activeTab && this.activeTab === tabName)
      ? 'selected-tab'
      : 'unselected-tab';
  }
}
