import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SubDetailsComponent } from './sub-details/sub-details.component';
import { FourthLayerOptionsComponent } from './fourth-layer-options/fourth-layer-options.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    SubDetailsComponent,
    FourthLayerOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
