import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: 'pages/profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)

  },
  {
    path: 'pages/quiz', loadChildren: () => import('./pages/quiz/quiz.module').then(m => m.QuizModule)
  },
  { path: 'auth/auth', loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
