import { Component, effect, input, signal } from '@angular/core';
import { Contact } from '../../../../core/models/contact.model';
import { PhoneType } from '../../../../core/models/phone-type.model';
import { Phone } from '../../../../core/models/phone.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phone-section',
  imports: [FormsModule],
  templateUrl: './phone-section.component.html',
  styleUrl: './phone-section.component.scss'
})
export class PhoneSectionComponent {
  // Required inputs
  readonlyPhoneTypes = input.required<PhoneType[]>();
  readonlyContact = input.required<Contact>();

  // Reactive signals initialized later
  contact = signal<Contact>({} as Contact); // temporary initial value
  phoneTypes = signal<PhoneType[]>([]);    // temporary initial value

  constructor() {
    // Defer the signal update until after inputs are available
    effect(() => {
      this.contact.set(this.readonlyContact());
      this.phoneTypes.set(this.readonlyPhoneTypes());
    });
  }

  //Add Phone into contact dynamically
  addPhone(phoneType: PhoneType) {
    const current = this.contact();
    const phones = current.phones ?? [];

    const newPhone: Phone = {
      phoneTypeId: phoneType.id,
      phoneType: phoneType,
      number: '', // You can let the user enter this later
      contactId: current.id
    };

    // Add the new phone to the phone list in contact
    const updatedContact: Contact = {
      ...current,
      phones: [...phones, newPhone]
    };

    this.contact.set(updatedContact);
    console.log(this.contact());
  }

  //Check if phone type is already added
  isPhoneAdded(phoneType: PhoneType): boolean {
    return this.contact().phones?.some(p => p.phoneTypeId === phoneType.id) ?? false;
  }

  //Handle click event when phone type dropdown item is clicked
  handlePhoneTypeClick(phoneType: PhoneType) {
    if (!this.isPhoneAdded(phoneType)) {
      this.addPhone(phoneType);
    }
  }
  //Remove phone dynamically
  removePhone(phoneTypeId: number) {
    const updatedPhones = (this.contact().phones ?? []).filter(p => p.phoneTypeId !== phoneTypeId);
    this.contact.set({
      ...this.contact(),
      phones: updatedPhones
    });
  }
}
