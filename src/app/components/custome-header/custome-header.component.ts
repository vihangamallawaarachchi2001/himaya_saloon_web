import { Component } from '@angular/core';
import { LucideAngularModule, Bell } from 'lucide-angular';

@Component({
  selector: 'app-custome-header',
  imports: [LucideAngularModule],
  templateUrl: './custome-header.component.html',
  styleUrl: './custome-header.component.css'
})
export class CustomeHeaderComponent {
  readonly Bell = Bell
}
