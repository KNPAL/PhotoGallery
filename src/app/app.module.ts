import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { BirdComponent } from './body/bird/bird.component';
import { AnimalComponent } from './body/animal/animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ModelboxComponent } from './body/modelbox/modelbox.component';
import { NatureComponent } from './body/nature/nature.component';
import { SpaceComponent } from './body/space/space.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    BirdComponent,
    AnimalComponent,
    ModelboxComponent,
    NatureComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [ModelboxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
