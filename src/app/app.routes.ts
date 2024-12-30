import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { ChatWithExpertComponent } from './pages/chat-with-expert/chat-with-expert.component';
import { AiHairRecommendationsComponent } from './pages/ai-hair-recommendations/ai-hair-recommendations.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component:SignupComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'dashboard',
        component: UserLayoutComponent,
        children: [
            { path: '', component: DashboardComponent},
            {
                path: '/appointments',
                component: AppointmentsComponent
            },
            {
                path: '/chat',
                component: ChatWithExpertComponent,
            }, 
            {
                path: '/ai',
                component: AiHairRecommendationsComponent,
            },
            {
                path: '/products',
                component: ProductsComponent,
            },

        ]
    }
];
