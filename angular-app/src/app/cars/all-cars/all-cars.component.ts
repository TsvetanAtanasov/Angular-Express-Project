import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { CarModel } from '../models/car.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  cars: Observable<CarModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(private carService : CarsService, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cars = this.carService.getAllCars();
  }

  changePage(page) {
    this.currentPage = page;
  }

}
