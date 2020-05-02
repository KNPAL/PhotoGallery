import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { BirdComponent } from './body/bird/bird.component';
import { AnimalComponent } from './body/animal/animal.component';
import { NatureComponent } from './body/nature/nature.component';
import { SpaceComponent } from './body/space/space.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bird', component: BirdComponent },
  { path: 'animal', component: AnimalComponent },
  { path: 'nature', component: NatureComponent },
  { path: 'space', component: SpaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
