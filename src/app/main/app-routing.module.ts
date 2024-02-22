import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardComponent } from '../pages/weather-card/weather-card.component';
import { RegisterComponent } from '../common/auth/components/register/register.component';
import { LoginComponent } from '../common/auth/components/login/login.component';

export const routes: Routes = [
  { path: 'dashboard', component: WeatherCardComponent },
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
