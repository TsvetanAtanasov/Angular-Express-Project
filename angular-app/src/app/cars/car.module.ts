import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination'

import { carComponents } from '.'
import { CarsService } from './cars.service';
import { RouterModule } from '@angular/router';
import { EditCarComponent } from './edit-car/edit-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';

@NgModule({
  declarations: [
    ...carComponents,
    EditCarComponent,
    DeleteCarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [
    CarsService
  ]
})
export class CarModule { }