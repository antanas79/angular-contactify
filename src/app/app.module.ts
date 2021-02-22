import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_partials/navbar/navbar.component';
import { FooterComponent } from './_partials/footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './contacts/card/card.component';
import { TableComponent } from './contacts/table/table.component';
import { SelectComponent } from './_elements/select/select.component';
import { SearchInputComponent } from './_elements/search-input/search-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckboxComponent } from './_elements/checkbox/checkbox.component';
import { ButtonComponent } from './_elements/button/button.component';
import { LinksComponent } from './_partials/links/links.component';
import { DropdownComponent } from './_elements/dropdown/dropdown.component';
import { SvgComponent } from './_elements/svg/svg.component';
import { FilterComponent } from './contacts/filter/filter.component';
import { AnchorTagComponent } from './_elements/anchor-tag/anchor-tag.component';
import { IconTextComponent } from './_partials/footer/icon-text/icon-text.component';
import { ContactsService } from '../app/_services/contacts.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactsComponent,
    CardComponent,
    TableComponent,
    SelectComponent,
    SearchInputComponent,
    CheckboxComponent,
    ButtonComponent, 
    LinksComponent,
    DropdownComponent, 
    SvgComponent, 
    FilterComponent,
    AnchorTagComponent,
    IconTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,

  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
