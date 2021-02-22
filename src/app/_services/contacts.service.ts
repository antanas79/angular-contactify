import { Injectable } from '@angular/core';
import { contacts } from '../../assets/data.js';

@Injectable()
export class ContactsService {
  contacts = contacts;
  constructor() {}

  getContacts() {
    return this.contacts;
  }
}
