import { Component } from '@angular/core';
import { LucideAngularModule, Bell } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly Bell = Bell;
}
