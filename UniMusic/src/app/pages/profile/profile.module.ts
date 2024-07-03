import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
