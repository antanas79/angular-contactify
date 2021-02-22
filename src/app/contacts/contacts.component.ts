import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../_services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: any;
  keys = [];
  actions = [];
  isLoaded = false;
  selected = 0;
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
    this.keys = ['name', 'surname', 'city', 'email', 'phone'];
    this.actions = ['edit', 'delete'];
    this.isLoaded = true;
  }

  updateValues(value, component) {
    if (component == 'table') {
      this.selected = value;
    } else {
      this.selected = 0;
      this.contacts = this.contactsService
        .getContacts()
        .filter(
          (c) =>
            c.active == value.showActive &&
            c.city.includes(value.selectedPropertyValue) &&
            c.name.includes(value.searchValue)
        );
      console.log(this.contacts);
    }
  }
}
