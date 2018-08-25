import { Component, OnInit } from '@angular/core';
import { CreateCarModel } from '../models/create-car.model';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  bindingModel : CreateCarModel;
  constructor(private carService : CarsService) { 
    this.bindingModel = new CreateCarModel('','',0,'',1,'');
  }

  ngOnInit() {
  }

  create(){
    this.carService.createCar(this.bindingModel)
      .subscribe();
  }

}
