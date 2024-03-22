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
import { BuscadorComponent } from './pages/persona/buscador/buscador.component';
import { PersonaModalComponent } from './pages/persona/persona-modal/persona-modal.component';
import { PanelPrincipalComponent } from './pages/negocio/panel-principal/panel-principal.component';
import { MaterialModule } from './module/material/material.module';
import { NegocioComponent } from './pages/negocio/negocio.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    EstablecimientoComponent,
    CuentaComponent,
    ClienteComponent,
    FiaoComponent,
    BuscadorComponent,
    PersonaModalComponent,
    PanelPrincipalComponent,
    NegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
