import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehiclesComponent} from './components/vehicles-list/vehicles.component';
import {VehiclesAddComponent} from './components/vehicles-add/vehicles-add.component';
import {VehiclesShowByIdComponent} from './components/vehicles-show-by-id/vehicles-show-by-id.component';
import {VehiclesModifyComponent} from './components/vehicles-modify/vehicles-modify.component';
import {VehiclesRemoveComponent} from './components/vehicles-remove/vehicles-remove.component';

const routes: Routes = [
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'vehicles-add', component: VehiclesAddComponent},
  {path: 'vehicles-show-by-id', component: VehiclesShowByIdComponent},
  {path: 'vehicles-modify', component: VehiclesModifyComponent},
  {path: 'vehicles-remove', component: VehiclesRemoveComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
