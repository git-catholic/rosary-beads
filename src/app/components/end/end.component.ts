import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-end',
  standalone: true,
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
