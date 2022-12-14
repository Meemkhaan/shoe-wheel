import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FourthLayerOptionsComponent } from './fourth-layer-options/fourth-layer-options.component';
import { HomeComponent } from './home/home.component';
import { SubDetailsComponent } from './sub-details/sub-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: ':options', component: DetailsComponent},
  {path: ':options/:suboptions', component: SubDetailsComponent},
  {path: ':options/:suboptions/:fouthlayeroptions', component: FourthLayerOptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
