import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './components/vehicles-list/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesAddComponent } from './components/vehicles-add/vehicles-add.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {VehiclesClientService} from './services/vehicles-client.service';
import { VehiclesShowByIdComponent } from './components/vehicles-show-by-id/vehicles-show-by-id.component';
import { VehiclesModifyComponent } from './components/vehicles-modify/vehicles-modify.component';
import { VehiclesRemoveComponent } from './components/vehicles-remove/vehicles-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehiclesAddComponent,
    VehiclesShowByIdComponent,
    VehiclesModifyComponent,
    VehiclesRemoveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [VehiclesClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
