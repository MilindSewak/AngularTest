import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
     children: [
       {
         path: 'welcome',
         loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
      }]
  },
  {
      path: 'login',
      component: LoginComponent,
      children: [
        {
          path: 'login',
          loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
       }]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
