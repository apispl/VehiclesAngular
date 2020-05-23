import { Component, OnInit } from '@angular/core';
import {VehiclesClientService} from '../../services/vehicles-client.service';
import {Vehicle} from '../../enitity/vehicle';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vehicles-modify',
  templateUrl: './vehicles-modify.component.html',
  styleUrls: ['./vehicles-modify.component.css']
})
export class VehiclesModifyComponent{

  vehicleId: number;
  vehicleById: Vehicle;
  vehId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vehiclesClientService: VehiclesClientService) {
  }

  onSubmit() {
    this.vehiclesClientService.getVehicleById(this.vehicleId).subscribe(value => {
      this.vehicleById = value;
    });
  }

  gotoUserList() {
    this.router.navigate(['/vehicles']);
  }

  onSubmitTwo() {
    this.vehiclesClientService.modifyVehicle(this.vehicleId, this.vehicleById).subscribe(value => this.gotoUserList());
  }
}
