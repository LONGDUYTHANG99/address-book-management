import { Component, effect, input, signal } from '@angular/core';
import { WebsiteType } from '../../../../core/models/website-type.model';
import { Contact } from '../../../../core/models/contact.model';
import { Website } from '../../../../core/models/website.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-website-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './website-section.component.html',
  styleUrl: './website-section.component.scss'
})
export class WebsiteSectionComponent {
  // Required inputs
  readonlyWebsiteTypes = input.required<WebsiteType[]>();
  readonlyContact = input.required<Contact>();

  // Reactive signals initialized later
  contact = signal<Contact>({} as Contact); // temporary initial value
  websiteTypes = signal<WebsiteType[]>([]);    // temporary initial value

  constructor() {
    // Defer the signal update until after inputs are available
    effect(() => {
      this.contact.set(this.readonlyContact());
      this.websiteTypes.set(this.readonlyWebsiteTypes());
    });
  }

  //Add Website into contact dynamically
  addWebsite(websiteType: WebsiteType) {
    const current = this.contact();
    const websites = current.websites ?? [];

    const newWebsite: Website = {
      websiteTypeId: websiteType.id,
      websiteType: websiteType,
      url: '', // You can let the user enter this later
      contactId: current.id
    };

    // Add the new website to the website list in contact
    const updatedContact: Contact = {
      ...current,
      websites: [...websites, newWebsite]
    };

    this.contact.set(updatedContact);
    console.log(this.contact());
  }

  //Check if website is already added
  isWebsiteAdded(websiteType: WebsiteType): boolean {
    return this.contact().websites?.some(p => p.websiteTypeId === websiteType.id) ?? false;
  }

  //Handle click event when website type dropdown item is clicked
  handleWebsiteTypeClick(websiteType: WebsiteType) {
    if (!this.isWebsiteAdded(websiteType)) {
      this.addWebsite(websiteType);
    }
  }
  //Remove website dynamically
  removeWebsite(websiteTypeId: number) {
    const updatedWebsites = (this.contact().websites ?? []).filter(w => w.websiteTypeId !== websiteTypeId);
    this.contact.set({
      ...this.contact(),
      websites: updatedWebsites
    });
  }
}
