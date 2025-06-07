import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../../../core/models/contact.model';
import { Phone } from '../../../../core/models/phone.model';
import { PhoneType } from '../../../../core/models/phone-type.model';
import { Organization } from '../../../../core/models/organization.model';
import { Master } from '../../../../core/models/master.model';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {
  //Dummy data
  phoneTypesDummy: PhoneType[] = [
    {
      id: 1,
      name: 'Mobile',
    },
    {
      id: 2,
      name: 'Work',
    }
  ];

  contactDummy: Contact = {
    id: 1,
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    firstName: 'Alice',
    lastName: 'Johnson',
    jobTitle: 'Software Engineer',
    personalEmail: 'alice.johnson@gmail.com',
    workEmail: 'alice.johnson@openai.com',
    birthday: '1990-05-15',
    gender: 2,
    organizationId: 2,
    phones: [
      {
        phoneTypeId: 1,
        phoneType: { id: 1, name: 'Mobile' },
        number: '0123456789',
        contactId: 1
      }
    ]
  };

  organizationsDummy: Organization[] = [
    { id: 1, name: 'OpenAI', email: 'info@openai.com', phone: '123456789', website: 'https://openai.com', country: 1, industry: 1, type: 1 },
    { id: 2, name: 'Google', email: 'contact@google.com', phone: '987654321', website: 'https://google.com', country: 1, industry: 2, type: 2 },
    { id: 3, name: 'Microsoft', email: 'support@microsoft.com', phone: '456123789', website: 'https://microsoft.com', country: 1, industry: 3, type: 3 },
    { id: 4, name: 'Amazon', email: 'help@amazon.com', phone: '789456123', website: 'https://amazon.com', country: 1, industry: 4, type: 4 }
  ];

  masterDummy: Master[] = [
    { id: 1, typeName: 'Gender', typeKey: 1, typeValue: 'Male' },
    { id: 2, typeName: 'Gender', typeKey: 2, typeValue: 'Female' },
    { id: 3, typeName: 'Industry', typeKey: 1, typeValue: 'Tech' },
    { id: 4, typeName: 'Industry', typeKey: 2, typeValue: 'Finance' }
  ];

  masterMapDummy: { [key: string]: Master[] } = {};

  ngOnInit() {
    this.groupMasters();
  }

  selectedOrganizationId = this.contactDummy.organizationId;

  //Send data to view
  phoneTypes = signal(this.phoneTypesDummy);
  contact = signal(this.contactDummy);
  organizations = signal(this.organizationsDummy);
  masterMap = signal(this.masterMapDummy);


  groupMasters() {
    const grouped = this.masterDummy.reduce((acc, item) => {
      const typeName = item.typeName ?? '';
      if (!acc[typeName]) {
        acc[typeName] = [];
      }
      acc[typeName].push(item);
      return acc;
    }, {} as { [key: string]: Master[] });

    this.masterMap.set(grouped); // ✅ update the signal's value
  }

  addPhoneType(phoneType: PhoneType) {
    const current = this.contact();
    const phones = current.phones ?? [];

    const newPhone: Phone = {
      phoneTypeId: phoneType.id,
      phoneType: phoneType,
      number: '', // You can let the user enter this later
      contactId: current.id
    };

    // Add the new phone to the list
    const updatedContact: Contact = {
      ...current,
      phones: [...phones, newPhone]
    };

    this.contact.set(updatedContact);
    console.log(this.contact());
  }

  isPhoneTypeAdded(phoneType: PhoneType): boolean {
    return this.contact().phones?.some(p => p.phoneTypeId === phoneType.id) ?? false;
  }

  handlePhoneTypeClick(phoneType: PhoneType) {
    if (!this.isPhoneTypeAdded(phoneType)) {
      this.addPhoneType(phoneType);
    }
  }
  removePhoneType(phoneTypeId: number) {
    const updatedPhones = (this.contact().phones ?? []).filter(p => p.phoneTypeId !== phoneTypeId);
    this.contact.set({
      ...this.contact(),
      phones: updatedPhones
    });
  }

  save() {
    console.log(this.contact);
    // Proceed with form submit logic
  }
}
