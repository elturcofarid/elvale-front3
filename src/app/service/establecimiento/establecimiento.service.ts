import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstablecimientoModel } from '../../pages/establecimiento/establecimiento.model';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {
  private url ='http://localhost:8083/api/establecimiento';

  establecimiento: EstablecimientoModel = new EstablecimientoModel;

  constructor(private http: HttpClient) { }



  getEstablecimiento(  ) {
    return this.http.get(`${ this.url }`);
  }

  postEstablecimiento (form : EstablecimientoModel){
    return this.http.post(`${ this.url }/registrar`, form);
  }
}