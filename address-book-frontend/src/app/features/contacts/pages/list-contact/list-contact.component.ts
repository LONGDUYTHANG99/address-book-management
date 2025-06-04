import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterBarComponent } from "../../components/filter-bar/filter-bar.component";

@Component({
  selector: 'app-list-contact',
  imports: [CommonModule, FilterBarComponent],
  templateUrl: './list-contact.component.html',
  styleUrl: './list-contact.component.scss'
})
export class ListContactComponent {
  contacts = [
    {
      initials: 'JD',
      name: 'John Davis (SAMPLE)',
      title: 'Cloud Sales Consultant at Pobuca (SAMPLE)',
      email: 'sales@pobuca.ca',
      color: '#2E86C1'
    },
    {
      initials: 'LS',
      name: 'Lisa Sanders (SAMPLE)',
      title: 'Client Service at Pobuca (SAMPLE)',
      email: 'support@pobuca.ca',
      color: '#F5B041'
    }
  ];
}
