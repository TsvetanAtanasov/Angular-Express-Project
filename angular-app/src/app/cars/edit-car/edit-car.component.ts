import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  bindingModel : CarModel
  constructor(private route : ActivatedRoute, private carService: CarsService,
  private router : Router,
  private toastr: ToastrService ) { }

  ngOnInit() {
    this.carService.getCarById(
      this.route.snapshot.params['id']
    ).subscribe(data => {
      this.bindingModel = data;
    })
  }

  edit() {
    this.carService.editCar(this.bindingModel.id, this.bindingModel)
      .subscribe(() => {
        this.toastr.success('Edited Car', "Success!");
        this.router.navigate(['/cars/all']);
      });
  }

}
