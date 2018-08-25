import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { CarsService } from '../cars.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {

  constructor(private authService: AuthService, private carService: CarsService, private toastr: ToastrService,
     private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
  }

  deleteItem() {
      const id = this.route.snapshot.params['id'];
    this.carService.deleteCar(id)
      .subscribe(() => {
      this.router.navigate(['cars/all']);
      this.toastr.success('Car Deleted', 'Warning!');
      })
  }

}
