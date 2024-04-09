import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaComponent } from './pages/persona/persona.component';
import { EstablecimientoComponent } from './pages/establecimiento/establecimiento.component';
import { HttpClientModule } from '@angular/common/http';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FiaoComponent } from './pages/fiao/fiao.component';
import { CartaComponent } from './pages/comumnes/carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    EstablecimientoComponent,
    CuentaComponent,
    ClienteComponent,
    FiaoComponent,
    CartaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
