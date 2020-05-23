import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../enitity/vehicle';
import {VehiclesClientService} from '../../services/vehicles-client.service';

@Component({
  selector: 'app-vehicles-show-by-id',
  templateUrl: './vehicles-show-by-id.component.html',
  styleUrls: ['./vehicles-show-by-id.component.css']
})
export class VehiclesShowByIdComponent {

  vehicleId: number;
  vehicleById: Vehicle;

  constructor(private vehiclesClientService: VehiclesClientService) { }

  onSubmit() {
    this.vehiclesClientService.getVehicleById(this.vehicleId).subscribe(value => {
      this.vehicleById = value;
    });
  }
}
