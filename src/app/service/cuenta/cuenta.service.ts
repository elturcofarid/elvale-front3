import { Injectable } from '@angular/core';
import { CuentaModel } from '../../pages/cuenta/cuenta.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private url ='http://localhost:8083/api/cuenta';

  cuentaModel: CuentaModel = new CuentaModel;

  constructor(private http: HttpClient) { }



  getCuenta(  ) {
    return this.http.get(`${ this.url }`);
  }

  postCuenta (form : CuentaModel){
    return this.http.post(`${ this.url }/registrar`, form);
  }
}
