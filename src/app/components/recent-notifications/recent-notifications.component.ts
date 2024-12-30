import { Component } from '@angular/core';
import { LucideAngularModule, Calendar, Mail, Phone, MapPin, Bell, X } from 'lucide-angular';

@Component({
  selector: 'app-recent-notifications',
  imports: [LucideAngularModule],
  templateUrl: './recent-notifications.component.html',
  styleUrl: './recent-notifications.component.css'
})
export class RecentNotificationsComponent {
  readonly CalendarIcon = Calendar;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapPinIcons = MapPin;
  readonly BellIcon = Bell;
  readonly XIcon = X;
}
