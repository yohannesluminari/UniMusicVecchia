import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PianoComponent } from '../../components/piano/piano.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { LoginComponent } from '../../components/login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    PianoComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
