import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() hasSearchIcon: boolean;
  @Output() onSearchValueChanged = new EventEmitter<any>();

  loaded= false;
  form: FormGroup;
  constructor(
     private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      searchValue: [''],
    });
    this.onChanges();
    this.loaded = true;
  }

  search() {

  }
  
  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.onSearchValueChanged.emit(val.searchValue);
    });
}

}
