import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LucideAngularModule, Home, User, Calendar, MessageSquare, Sparkles, ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [ LucideAngularModule,NgFor, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  readonly HomeIcons= Home;
  readonly UserIcon = User;
  readonly CalendarIcon = Calendar;
  readonly MessageSquareIcon = MessageSquare;
  readonly SparklesIcon = Sparkles;
  readonly ShoppingBagIcon = ShoppingBag;

   navItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Calendar, label: 'Appointments', href: '/dashboard/appointments' },
    { icon: MessageSquare, label: 'Chat with Expert', href: '/dashboard/chat' },
    { icon: Sparkles, label: 'AI Hair Recommendations', href: '/dashboard/ai' },
    { icon: ShoppingBag, label: 'Products', href: '/dashboard/products' },
  ]
}
