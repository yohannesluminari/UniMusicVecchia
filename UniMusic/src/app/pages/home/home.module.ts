import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PianoComponent } from '../../components/piano/piano.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { LoginComponent } from '../../components/login/login.component';

import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../../components/footer/footer.component';
import { YohannesLuminariComponent } from '../../components/yohannes-luminari/yohannes-luminari.component';




@NgModule({
  declarations: [
    HomeComponent,
    PianoComponent,
    CarouselComponent,
    YohannesLuminariComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
