import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateStorageService } from 'src/app/services/state-storage.service';

@Component({
  selector: 'app-language-redirect',
  templateUrl: './language-redirect.component.html',
  styleUrls: ['./language-redirect.component.scss']
})
export class LanguageRedirectComponent implements OnInit {

  readonly supportedLanguages = ['en', 'es'];

  private language: string;

  constructor(private stateStorage: StateStorageService,
              private router: Router) {
    this.language = stateStorage.language.data;
    if (this.language === undefined) {
      this.language = window.navigator.language;
      if (this.language && this.language.length > 2) {
        this.language = this.language.substring(0, 2);
      }
      console.log(`No language stored - selecting browser language: ${this.language}`);
      stateStorage.language.data = this.language;
    }
    console.log(`stateStorage language: ${this.language}`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit language: ${this.language}`);
    if (this.supportedLanguages.indexOf(this.language) >= 0 && !this.matchUrlEnd(window.location.href, this.language)) {
      const rootUrl = window.location.href.substring(0, window.location.href.length - 3);
      const newUrl = `${rootUrl}${this.language}/`;
      this.router.navigate([newUrl]);
    }
    // console.log(`using url: ${window.location.href}`);
  }

  private matchUrlEnd(url: string, matchSubstring: string): boolean {
    let useSubstring = '/' + matchSubstring;
    if (url.endsWith(useSubstring)) {
      return true;
    }
    useSubstring += '/';
    return url.endsWith(useSubstring);
  }
}
