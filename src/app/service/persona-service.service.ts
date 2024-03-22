import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModel } from '../pages/persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {
  private url ='http://localhost:8083/api/persona';

  personaModel: PersonaModel = new PersonaModel;

  constructor(private http: HttpClient) { }



  getPersona(  ) {
    return this.http.get(`${ this.url }`);
  }

  getPersonaDocumento(form : PersonaModel){
    return this.http.post(`${ this.url }/documento`, form);
  }

  postPersona (form : PersonaModel){
    return this.http.post(`${ this.url }/registrar`, form);
  }
}
