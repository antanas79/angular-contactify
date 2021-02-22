import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() checkboxName: string;
  @Input() checkboxId: string;
  @Input() checkboxLabelText: string;
  @Input() checkboxValue: boolean;
  @Output() onCheckboxValueChanged = new EventEmitter<any>();
  loaded = false;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      checkboxValue: [this.checkboxValue],
    });
    this.onChanges();
    this.loaded = true;
  }

  onChanges(): void {
    this.form.valueChanges.subscribe((val) => {
      this.onCheckboxValueChanged.emit(val.checkboxValue);
    });
  }
}
