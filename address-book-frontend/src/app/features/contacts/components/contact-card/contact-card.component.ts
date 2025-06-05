import { Component, input } from '@angular/core';
import { Contact } from '../../../../core/models/contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  contact = input.required<Contact>();
}
