import { Component } from '@angular/core';
import { LucideAngularModule, Calendar, Mail, Phone, MapPin, Bell, X } from 'lucide-angular';

@Component({
  selector: 'app-recent-appoitments',
  imports: [LucideAngularModule],
  templateUrl: './recent-appoitments.component.html',
  styleUrl: './recent-appoitments.component.css'
})
export class RecentAppoitmentsComponent {
  readonly CalendarIcon = Calendar;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapPinIcons = MapPin;
  readonly BellIcon = Bell;
  readonly XIcon = X;
  
}
