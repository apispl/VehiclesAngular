import { Component, OnInit } from '@angular/core';
import {VehiclesClientService} from '../../services/vehicles-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicle} from '../../enitity/vehicle';

@Component({
  selector: 'app-vehicles-add',
  templateUrl: './vehicles-add.component.html',
  styleUrls: ['./vehicles-add.component.css']
})
export class VehiclesAddComponent {

  vehicle: Vehicle;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vehiclesClientService: VehiclesClientService) {
    this.vehicle = new Vehicle();
  }

  onSubmit() {
    this.vehiclesClientService.save(this.vehicle).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/vehicles']);
  }
}
