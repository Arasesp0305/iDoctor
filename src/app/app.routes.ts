import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SinginComponent } from './pages/auth/singin/singin.component';
import { AuthGuard, canActivate } from '@angular/fire/auth-guard';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    {path:"home",component:HomeComponent,...canActivate(() => redirectUnauthorizedTo(["login"]))},
    {path:"bookings",component:BookingsComponent,canActivate: [authGuard],data: { role: '*' }},
    {path:"dashboard",component:DashboardComponent,children: [
        {path:"profile",component:ProfileComponent,canActivate: [authGuard],data: { role: '*' }},
        {path:"stats",component:StatsComponent,canActivate: [authGuard],data: { role: '*' }}]
        ,canActivate: [authGuard],data: { role: '*' }},
    {path:"edit/:id",component:EditComponent,canActivate: [authGuard],data: { role: 'ADMIN' }},
    {path:"login",component:LoginComponent},
    {path:"singin",component:SinginComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"**",redirectTo:"home",pathMatch:"full"}

];
