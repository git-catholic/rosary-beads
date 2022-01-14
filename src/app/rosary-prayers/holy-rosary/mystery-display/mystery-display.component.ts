import { Component, Input, OnInit } from '@angular/core';
import { HolyRosaryBeadGroupList } from 'src/app/models/holy-rosary-bead-group-list';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-mystery-display',
  templateUrl: './mystery-display.component.html',
  styleUrls: ['./mystery-display.component.scss']
})
export class MysteryDisplayComponent implements OnInit {

  @Input()
  activeBeadGroupList: HolyRosaryBeadGroupList;

  private mysteryNumbers = [undefined, '1st', '2nd', '3rd', '4th', '5th'];

  constructor(public appConfig: AppConfigService) { }

  ngOnInit(): void {
  }


  get mysteryNum(): string {
    return this.mysteryNumbers[this.activeBeadGroupList.mysteryNumber()];
  }

  get mysteryName(): string {
    return this.activeBeadGroupList.mysterySequenceName();
  }

  get mysteryLiteralLabel(): string {
    return $localize`:@@mysteryLiteral:Mystery`;
  }
}
