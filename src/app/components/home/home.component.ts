import { Component, OnInit } from '@angular/core';
import { SupportedLanguagesService } from 'src/app/services/supported-languages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private languages: SupportedLanguagesService) { }

  ngOnInit(): void {
    this.languages.checkForRedirect();
  }

}
