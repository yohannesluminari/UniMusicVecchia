import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pages/home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'pages/prfile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) }, { path: 'pages/quiz', loadChildren: () => import('./pages/quiz/quiz.module').then(m => m.QuizModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
