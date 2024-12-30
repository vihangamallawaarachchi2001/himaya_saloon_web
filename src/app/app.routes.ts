import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

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
];
