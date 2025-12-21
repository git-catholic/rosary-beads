import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  @Input()
  prayerName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
