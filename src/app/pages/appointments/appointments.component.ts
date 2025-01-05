import { Component } from '@angular/core';
import { LucideAngularModule, Calendar } from 'lucide-angular';

@Component({
  selector: 'app-appointments',
  imports: [LucideAngularModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {
  readonly CalendarIcon = Calendar;

  appointments = [
    {
      date: 'May 20, 2023',
      time: '10:00 AM',
      service: 'Haircut and Style',
      hairDesigner: 'Vrat koli',
      statu: 'confirmed'
    },
    {
      date: 'May 20, 2023',
      time: '10:00 AM',
      service: 'Haircut and Style',
      hairDesigner: 'Vrat koli',
      statu: 'confirmed'
    },
    {
      date: 'May 21, 2023',
      time: '11:00 AM',
      service: 'Haircut and Style',
      hairDesigner: 'Vrat koli',
      statu: 'confirmed'
    },
    {
      date: 'May 22, 2023',
      time: '12:00 PM',
      service: 'Haircut and Style',
      hairDesigner: 'Vrat koli',
      statu: 'confirmed'
    },
    {
      date: 'May 23, 2023',
      time: '13:00 PM',
      service: 'Haircut and Style',
      hairDesigner: 'Vrat koli',
      statu: 'confirmed'
    },
    {
      date: 'May 24, 2023',
      time: '14:00 PM',
      service: 'Haircut and Style',
      hairDesigner: 'Vrat koli',
      statu: 'confirmed'
    },
  ]
}
