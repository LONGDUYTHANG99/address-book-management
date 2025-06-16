import { Component } from '@angular/core';
import { ContactDetailsComponent } from '../../components/contact-details/contact-details.component';
import { ActivityPanelComponent } from '../../components/activity-panel/activity-panel.component';
import { MoreInfoPanelComponent } from '../../components/more-info-panel/more-info-panel.component';

@Component({
  selector: 'app-detail-contact',
  imports: [ContactDetailsComponent, ActivityPanelComponent, MoreInfoPanelComponent],
  templateUrl: './detail-contact.component.html',
  styleUrl: './detail-contact.component.scss'
})
export class DetailContactComponent {

}
