import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() placeholder: string;
  @Input() options: any;
  @Output() onSelectValueChanged = new EventEmitter<any>();
  form: FormGroup;
  loaded = false;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      selectValue: [''],
    });
    this.onChanges();
    this.loaded = true;
  }

  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.onSelectValueChanged.emit(val.selectValue)
    });
}

}
