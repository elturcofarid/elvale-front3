import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';

const routes: Routes = [
  { path: 'reactive', component: AppComponent},
  { path: 'cuenta', component: CuentaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'cuenta'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
