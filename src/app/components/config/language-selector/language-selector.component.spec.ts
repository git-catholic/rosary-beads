import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageItem, LanguageSelectorComponent } from './language-selector.component';
import { CommonModule } from '@angular/common';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';
import { LanguageSelectorFixtureSpec } from './fixtures/language-selector-fixture.spec';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;
  let elements: LanguageSelectorFixtureSpec;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        RosaryTranslateModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSelectorComponent);
    elements = new LanguageSelectorFixtureSpec(fixture);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const items: LanguageItem[] = [
      { displayValue: 'English', value: 'en' },
      { displayValue: 'Spanish', value: 'es' },
      { displayValue: 'Klingon', value: '**' }
    ];
    component.items = items;

    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(elements.langOption1?.nativeElement).toBeTruthy();
    expect(elements.langOption2?.nativeElement).toBeTruthy();
    expect(elements.langOption3?.nativeElement).toBeTruthy();
    expect(elements.langOptionNotExist?.nativeElement).toBeFalsy();
  });
});
