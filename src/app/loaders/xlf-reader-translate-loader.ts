import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class XlfReaderTranslateLoader implements TranslateLoader {

  private readonly usePrefix: string;
  private readonly useSuffix: string;

  constructor(private http: HttpClient,
              prefix: string = 'i18n/messages',
              suffix: string = '.xlf') {

    console.log(`XlfReaderTranslateLoader (start)`);

    this.usePrefix = (prefix?.length > 0) ? prefix : 'i18n/messages';
    this.useSuffix = (suffix?.length > 0) ? suffix : '.xlf';
  }

  getTranslation(langId: string): Observable<any> {
    const xlfSegment = `.${langId}`;
    const loadLangFilename = `${this.usePrefix}${xlfSegment}${this.useSuffix}`;
    console.log(`loadLangFile: ${loadLangFilename}`)
    return this.getXlfData(`${loadLangFilename}`);
  }

  getXlfData(filePath: string): Observable<any> {
    const responseMap = {};
    return this.http.get(filePath, { responseType: 'text' }).pipe(
      map(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, 'text/xml');
        console.log('Parsed XML Document:', xmlDoc);
        const elements: HTMLCollectionOf<Element> = xmlDoc.getElementsByTagName('trans-unit');

        for (let idx = 0; idx < elements?.length; idx++) {
          const element = elements[idx];
          const key: string = element?.attributes?.getNamedItem('id')?.textContent || '';
          if (key?.length > 0) {
            const target = this.getTextContentForTagName(element, 'target');
            const entry = JSON.parse(`{ "${key}": "${target}" }`);
            Object.assign(responseMap, entry);
          }
        }
        return responseMap;
      })
    )
  }

  private getTextContentForTagName(element: Element, tagName: string): string {
    const childElements = element.getElementsByTagName(tagName);
    const value = (childElements[0] as HTMLElement)?.textContent;
    return value || 'NOT PROVIDED';
  }

}
