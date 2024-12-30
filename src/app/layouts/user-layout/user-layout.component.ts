import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CustomeHeaderComponent } from '../../components/custome-header/custome-header.component';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, SidebarComponent, CustomeHeaderComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
