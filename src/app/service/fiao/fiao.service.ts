import { Injectable } from '@angular/core';
import { FiaoModel } from '../../pages/fiao/fiao.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiaoService {
  private url ='http://localhost:8083/api/fiao';

  fiaoModel: FiaoModel = new FiaoModel;

  constructor(private http: HttpClient) { }



  getFiao(  ) {
    return this.http.get(`${ this.url }`);
  }

  postFiao (form : FiaoModel){
    return this.http.post(`${ this.url }/registrar`, form);
  }
}
