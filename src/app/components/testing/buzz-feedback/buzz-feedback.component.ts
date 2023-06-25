import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buzz-feedback',
  templateUrl: './buzz-feedback.component.html',
  styleUrls: ['./buzz-feedback.component.scss']
})
export class BuzzFeedbackComponent implements OnInit {

  fg = new UntypedFormGroup({
    time: new UntypedFormControl(200)
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`onSubmit 1: ${JSON.stringify(this.fg.value)}`);
    const value = this.fg.controls['time'].value;
    console.log(`onSubmit 2: ${value}`);
    window.navigator.vibrate(value);
  }

  onReset() {
    console.log(`onReset: ${JSON.stringify(this.fg.value)}`);
  }
}
