import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../../../core/models/contact.model';
import { PhoneType } from '../../../../core/models/phone-type.model';
import { Organization } from '../../../../core/models/organization.model';
import { Master } from '../../../../core/models/master.model';
import { PhoneSectionComponent } from "../../components/phone-section/phone-section.component";
import { WebsiteSectionComponent } from "../../components/website-section/website-section.component";
import { WebsiteType } from '../../../../core/models/website-type.model';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule, CommonModule, PhoneSectionComponent, WebsiteSectionComponent],
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
  websiteTypesDummy: WebsiteType[] = [
    {
      id: 1,
      name: 'Facebook'
    },
    {
      id: 2,
      name: 'Instagram'
    },
    {
      id: 3,
      name: 'Linkedin'
    },
    {
      id: 4,
      name: 'Twitter'
    }
  ]

  contactDummy: Contact = {
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
    ],
    websites: [
      {
        websiteTypeId: 2,
        websiteType: {id: 2, name: 'Instagram'}
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
    { id: 3, typeName: 'Relationship', typeKey: 1, typeValue: 'Mother' },
    { id: 4, typeName: 'Relationship', typeKey: 2, typeValue: 'Wife' },
    { id: 5, typeName: 'Relationship', typeKey: 3, typeValue: 'Husband' },
    { id: 6, typeName: 'Relationship', typeKey: 4, typeValue: 'Father' },
    { id: 7, typeName: 'Department', typeKey: 1, typeValue: 'Information Technology' },
    { id: 8, typeName: 'Department', typeKey: 2, typeValue: 'Marketing' },
    { id: 9, typeName: 'Department', typeKey: 3, typeValue: 'Multimedia Communication' },
    { id: 10, typeName: 'Group', typeKey: 1, typeValue: 'Close Friends' },
    { id: 11, typeName: 'Group', typeKey: 2, typeValue: 'Co-Workers' },
    { id: 12, typeName: 'Group', typeKey: 3, typeValue: 'Emmergency' },
    { id: 13, typeName: 'Group', typeKey: 4, typeValue: 'Family' }
  ];

  masterMapDummy: { [key: string]: Master[] } = {};

  ngOnInit() {
    this.groupMasters();
  }

  selectedOrganizationId = this.contactDummy.organizationId;

  //Send data to view using signal
  phoneTypes = signal(this.phoneTypesDummy);
  websiteTypes = signal(this.websiteTypesDummy);
  contact = signal(this.contactDummy);
  organizations = signal(this.organizationsDummy);
  masterMap = signal(this.masterMapDummy);

  //Seperate master data group
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


  //Save the form information
  save() {
    console.log(this.contact);
    // Proceed with form submit logic
  }
}
