import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { FiaoComponent } from './pages/fiao/fiao.component';

const routes: Routes = [
  { path: 'reactive', component: AppComponent},
  { path: 'cuenta', component: CuentaComponent},
  { path: 'fiao', component: FiaoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'fiao'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
