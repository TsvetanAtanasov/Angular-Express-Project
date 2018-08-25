import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: Observable<CarModel>;
  id: string;
  constructor(private route: ActivatedRoute,
  private carService: CarsService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.car = this.carService.getCarDetails(this.id);
  }

}
