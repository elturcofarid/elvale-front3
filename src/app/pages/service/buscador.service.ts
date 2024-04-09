import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  isOpen: boolean = false;
  persona: any;

  constructor() { 
    this.persona = {nombre:''}
  }

  openModal() {
    console.log('no hace ni verga')
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}