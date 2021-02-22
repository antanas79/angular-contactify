import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() list: any;
  @Input() selectProperty: any;
  @Output() onFilterSubmit = new EventEmitter<any>();
  uniqueItems: any;
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.list = this.list.map(a => a[this.selectProperty])
    this.uniqueItems = [...new Set(this.list)];
    this.form = this.formBuilder.group({
      searchValue: [''],
      selectedPropertyValue: [''],
      showActive: [true]
    });
  }

  updateFormValues(value, property) {
    this.form.controls[property].setValue(value);
  } 

  save() {
    this.onFilterSubmit.emit(this.form.value)
  }
}
