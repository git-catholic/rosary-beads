import { Component, Input, OnInit } from '@angular/core';
import { AppConfigService } from '../../../services/app-config.service';
import { Mysteries } from '../../../models/holy-rosary/mysteries';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mystery-display',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mystery-display.component.html',
  styleUrls: ['./mystery-display.component.scss']
})
export class MysteryDisplayComponent implements OnInit {

  // @Input()
  // activeBeadGroupList: BeadGroupList;

  @Input()
  mystery: string;

  @Input()
  mysteryDesc: string;

  @Input()
  fruit: string;

  constructor(public appConfig: AppConfigService) { }

  ngOnInit(): void {
  }

  get mysteryLiteralLabel(): string {
    return $localize`:@@mysteryLiteral:Mystery`;
  }
}
