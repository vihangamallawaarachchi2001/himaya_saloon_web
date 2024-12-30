import { Component } from '@angular/core';
import { LucideAngularModule, Calendar, Mail, Phone, MapPin, Bell } from 'lucide-angular';


@Component({
  selector: 'app-profile',
  imports: [LucideAngularModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  readonly CalendarIcon = Calendar;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapPinIcons = MapPin;
  readonly BellIcon = Bell;

}
