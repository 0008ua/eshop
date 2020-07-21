import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RedirectionAfterOauthComponent } from './redirection-after-oauth/redirection-after-oauth.component';
import { ProfileComponent } from './profile/profile.component';
// import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RedirectionAfterOauthComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UserRoutingModule,
    // SharedModule,
  ]
})
export class UserModule { }
