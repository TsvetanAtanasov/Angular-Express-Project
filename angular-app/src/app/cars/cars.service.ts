import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCarModel } from './models/create-car.model';
import { CarModel } from './models/car.model';

const createUrl = "http://localhost:5000/cars/create";
const allUrl = "http://localhost:5000/cars/all";
const detailsUrl = "http://localhost:5000/cars/details/";
const myCarUrl = "http://localhost:5000/cars/mine";
const deleteUrl = "http://localhost:5000/cars/delete/";
const carByIdUrl = "http://localhost:5000/cars/";
const editCarUrl = "http://localhost:5000/cars/edit/";

@Injectable()
export class CarsService {

  constructor(private http: HttpClient) { }

  createCar(body: CreateCarModel) {
    return this.http.post(createUrl, body);
  }

  getAllCars() {
    return this.http.get<CarModel[]>(allUrl);
  }

  getCarDetails(id : string) {
    return this.http.get<CarModel>(detailsUrl + id);
  }

  getMyCar() {
    return this.http.get<CarModel[]>(myCarUrl);
  }

  deleteCar(id : string) {
    return this.http.delete(deleteUrl + id);
  }

  getCarById(id : string) {
    return this.http.get<CarModel>(carByIdUrl + id); 
  }

  editCar(id: string, body) {
    return this.http.put(editCarUrl + id, body);
  }
}
