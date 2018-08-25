import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { CarModel } from '../models/car.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.css']
})
export class MyCarComponent implements OnInit {

  constructor(private authService: AuthService,private carService: CarsService, private router : Router) { }
  cars : Observable<CarModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;
  ngOnInit() {
    this.cars = this.carService.getMyCar();
  }

  changePage(page) {
    this.currentPage = page;
  }

}
