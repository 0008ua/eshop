import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RedirectionAfterOauthComponent } from './redirection-after-oauth/redirection-after-oauth.component';
import { UserComponent } from './user.component';
import { AuthGuard } from 'src/app/services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: { auth: 'user' },
      },
      {
        path: 'redirection-after-oauth',
        component: RedirectionAfterOauthComponent,
      },
      // {
      //   path: '',
      //   component: Page404Component
      // },
    ]
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   // children: [
  //   //   {
  //   //     path: 'r',
  //   //     component: FeedbackComponent,
  //   //   },
  //   // ]
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   // canActivate: [AuthGuard],
  //   // data: { auth: 'guest' },
  // },
  // {
  //   path: 'redirection-after-oauth',
  //   component: RedirectionAfterOauthComponent,
  // },
  // {
  //   path: '',
  //   component: Page404Component
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
