import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FilterBarComponent } from "../../components/filter-bar/filter-bar.component";
import { Contact } from '../../../../core/models/contact.model';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { ToolBarComponent } from '../../components/tool-bar/tool-bar.component';

@Component({
  selector: 'app-list-contact',
  imports: [CommonModule, FilterBarComponent, ContactCardComponent, ToolBarComponent],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.scss'
})
export class ListContactComponent {
  //Title
  //contentTitle = signal("Contacts");
  //Dummy contacts
  // contacts = [
  //   {
  //     initials: 'JD',
  //     name: 'John Davis (SAMPLE)',
  //     title: 'Cloud Sales Consultant at Pobuca (SAMPLE)',
  //     email: 'sales@pobuca.ca',
  //     color: '#2E86C1'
  //   },
  //   {
  //     initials: 'LS',
  //     name: 'Lisa Sanders (SAMPLE)',
  //     title: 'Client Service at Pobuca (SAMPLE)',
  //     email: 'support@pobuca.ca',
  //     color: '#F5B041'
  //   },
  //   {
  //     initials: 'LS',
  //     name: 'Lisa Sanders (SAMPLE)',
  //     title: 'Client Service at Pobuca (SAMPLE)',
  //     email: 'support@pobuca.ca',
  //     color: '#F5B041'
  //   },
  //   {
  //     initials: 'LS',
  //     name: 'Lisa Sanders (SAMPLE)',
  //     title: 'Client Service at Pobuca (SAMPLE)',
  //     email: 'support@pobuca.ca',
  //     color: '#F5B041'
  //   }
  // ];
  //List of contacts
  //contactsList = signal<Array<Contact>>(this.contacts);
  
}
