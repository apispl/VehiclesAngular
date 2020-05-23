import { Component, OnInit } from '@angular/core';
import {VehiclesClientService} from '../../services/vehicles-client.service';
import {Vehicle} from '../../enitity/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehiclesList: Vehicle[];

  constructor(private vehiclesClientService: VehiclesClientService) { }

  ngOnInit(): void {
    this.vehiclesClientService.getListVehicle().subscribe(value => {
      this.vehiclesList = value;
    });
  }
}
