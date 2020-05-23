import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../../enitity/vehicle';
import {VehiclesClientService} from '../../services/vehicles-client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vehicles-remove',
  templateUrl: './vehicles-remove.component.html',
  styleUrls: ['./vehicles-remove.component.css']
})
export class VehiclesRemoveComponent {

  vehicleId: number;
  vehicleById: Vehicle;

  constructor(private route: ActivatedRoute, private router: Router, private vehiclesClientService: VehiclesClientService) { }

  onSubmit() {
    this.vehiclesClientService.getVehicleById(this.vehicleId).subscribe(value => {
      this.vehicleById = value;
    });
  }

  onClick(){
    this.vehiclesClientService.deleteVehicle(this.vehicleId).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/vehicles']);
  }

}
