import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  imports: [],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  //Import button
  importButton = signal("Import");
  //Add button
  addButton = signal("Add Contact");
}
