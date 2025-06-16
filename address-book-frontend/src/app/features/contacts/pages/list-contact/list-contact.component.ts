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
  contentTitle = signal("Contacts");
  //Dummy contacts
  contacts = [
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      firstName: 'Alice',
      lastName: 'Johnson',
      nickName: 'AJ',
      jobTitle: 'Software Engineer',
      personalEmail: 'alice.johnson@gmail.com',
      workEmail: 'alice.johnson@openai.com',
      birthday: '1990-05-15',
      gender: 2,
      group: 2,
      relationship: 2,
      organizationId: 2,
      department: 3,
      workAdress: 'Hoa Lac, Thach That, Ha Noi',
      homeAdress: 'Cao Bang, Viet Nam',
      phones: [
        {
          phoneTypeId: 1,
          phoneType: { id: 1, name: 'Mobile' },
          number: '0123456789',
        },
        {
          phoneTypeId: 2,
          phoneType: { id: 2, name: 'Work' },
          number: '0123456789',
        }
      ]
    },
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      firstName: 'Alice',
      lastName: 'Johnson',
      nickName: 'AJ',
      jobTitle: 'Software Engineer',
      personalEmail: 'alice.johnson@gmail.com',
      workEmail: 'alice.johnson@openai.com',
      birthday: '1990-05-15',
      gender: 2,
      group: 2,
      relationship: 2,
      organizationId: 2,
      department: 3,
      workAdress: 'Hoa Lac, Thach That, Ha Noi',
      homeAdress: 'Cao Bang, Viet Nam',
      phones: [
        {
          phoneTypeId: 1,
          phoneType: { id: 1, name: 'Mobile' },
          number: '0123456789',
        },
        {
          phoneTypeId: 2,
          phoneType: { id: 2, name: 'Work' },
          number: '0123456789',
        }
      ]
    },
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      firstName: 'Alice',
      lastName: 'Johnson',
      nickName: 'AJ',
      jobTitle: 'Software Engineer',
      personalEmail: 'alice.johnson@gmail.com',
      workEmail: 'alice.johnson@openai.com',
      birthday: '1990-05-15',
      gender: 2,
      group: 2,
      relationship: 2,
      organizationId: 2,
      department: 3,
      workAdress: 'Hoa Lac, Thach That, Ha Noi',
      homeAdress: 'Cao Bang, Viet Nam',
      phones: [
        {
          phoneTypeId: 1,
          phoneType: { id: 1, name: 'Mobile' },
          number: '0123456789',
        },
        {
          phoneTypeId: 2,
          phoneType: { id: 2, name: 'Work' },
          number: '0123456789',
        }
      ]
    },
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      firstName: 'Alice',
      lastName: 'Johnson',
      nickName: 'AJ',
      jobTitle: 'Software Engineer',
      personalEmail: 'alice.johnson@gmail.com',
      workEmail: 'alice.johnson@openai.com',
      birthday: '1990-05-15',
      gender: 2,
      group: 2,
      relationship: 2,
      organizationId: 2,
      department: 3,
      workAdress: 'Hoa Lac, Thach That, Ha Noi',
      homeAdress: 'Cao Bang, Viet Nam',
      phones: [
        {
          phoneTypeId: 1,
          phoneType: { id: 1, name: 'Mobile' },
          number: '0123456789',
        },
        {
          phoneTypeId: 2,
          phoneType: { id: 2, name: 'Work' },
          number: '0123456789',
        }
      ]
    },
  ];
  //List of contacts
  contactsList = signal<Array<Contact>>(this.contacts);

}
