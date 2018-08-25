import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AllCarsComponent } from './cars/all-cars/all-cars.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { MyCarComponent } from './cars/my-car/my-car.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { EditCarComponent } from './cars/edit-car/edit-car.component';
import { DeleteCarComponent } from './cars/delete-car/delete-car.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { AuthAdminGuard } from './authentication/guards/auth-admin.guard';

const routes : Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cars', canActivate:[AuthGuard],children: [
    { path: 'all', component: AllCarsComponent},
    { path: 'details/:id', component: CarDetailsComponent},
    { path: 'my', component: MyCarComponent},
    { path: 'create', component: CreateCarComponent},
    { path: 'edit/:id',canActivate:[AuthAdminGuard],component: EditCarComponent},
    { path: 'delete/:id', canActivate:[AuthAdminGuard],component: DeleteCarComponent}
  ]}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }