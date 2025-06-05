import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { SideBarComponent } from '../components/side-bar/side-bar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, SideBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  
}
