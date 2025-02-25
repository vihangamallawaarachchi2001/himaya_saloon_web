import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LucideAngularModule, Home, User, Calendar, MessageSquare, Sparkles, ShoppingBag } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [ LucideAngularModule,NgFor, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router){}

  readonly HomeIcons= Home;
  readonly UserIcon = User;
  readonly CalendarIcon = Calendar;
  readonly MessageSquareIcon = MessageSquare;
  readonly SparklesIcon = Sparkles;
  readonly ShoppingBagIcon = ShoppingBag;

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/')
  }

  role = localStorage.getItem('role');

   navItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Calendar, label: 'Appointments', href: '/dashboard/appointments' },
    { icon: MessageSquare, label: 'Chat with Expert', href: '/dashboard/chat' },
    { icon: Sparkles, label: 'AI Hair Recommendations', href: '/dashboard/ai' },
    { icon: ShoppingBag, label: 'Products', href: '/dashboard/products' },
  ]

  adminNavItens = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: User, label: 'User Management', href: '/dashboard/appointments' },
    { icon: ShoppingBag, label: 'Product Management', href: '/dashboard/chat' },
    { icon: Sparkles, label: 'Order Management', href: '/dashboard/ai' },
    { icon: ShoppingBag, label: 'Appoitment Management', href: '/dashboard/products' },
    { icon: Calendar, label: 'Chats', href: '/dashboard/appointments' },
    { icon: MessageSquare, label: 'Employee Management', href: '/dashboard/chat' },
    { icon: Sparkles, label: 'Review Management', href: '/dashboard/ai' },
    { icon: ShoppingBag, label: 'Settings ', href: '/dashboard/products' },
  ]
}
