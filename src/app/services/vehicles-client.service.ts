import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../enitity/vehicle';
import {logger} from 'codelyzer/util/logger';
import {Url} from 'url';

@Injectable({
  providedIn: 'root'
})
export class VehiclesClientService {
  private baseUrl: string;
  private params: HttpParams;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://vehicles-api-app.herokuapp.com/vehicles';
  }

  public getListVehicle(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.baseUrl);
  }

  public save(vehicle: Vehicle) {
    return this.httpClient.post<Vehicle>(this.baseUrl, vehicle);
  }

  public getVehicleById(vehId: number): Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(this.baseUrl + '/' + vehId);
  }

  public modifyVehicle(vehId: number, veh: Vehicle): Observable<Vehicle>{
    this.params = new HttpParams()
      .append('id', String(vehId));
    return this.httpClient.patch<Vehicle>(this.baseUrl, veh, {params: this.params});
  }

  public deleteVehicle(vehId: number){
    this.params = new HttpParams()
      .append('id', String(vehId));
    return this.httpClient.delete(this.baseUrl, {params: this.params});
  }
}



