import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../_services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: any;
  filteredContacts: any;
  keys = [];
  actions = [];
  isLoaded = false;
  selected = 0;
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
    this.filteredContacts = this.contacts;
    this.keys = ['name', 'surname', 'city', 'email', 'phone'];
    this.actions = ['edit', 'delete'];
    this.isLoaded = true;
  }

  updateValues(value, component) {
    if (component == 'table') {
      this.selected = value;
    } else {
      this.selected = 0;

      let searchValue = value.searchValue?.length > 0;
      let selectValue = value.selectValue?.length > 0;
      let checkboxValue = value.checkboxValue;

      this.filteredContacts = this.contacts
        .filter((c) => (checkboxValue ? c.active : true))
        .filter((c) => (selectValue ? c.city === value.selectValue : true))
        .filter((c) =>
          searchValue
            ? c.name.toLowerCase().includes(value.searchValue.toLowerCase())
            : true
        );
    }
  }
}
