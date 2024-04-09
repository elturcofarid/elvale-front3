import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {
  selectedSearchTerm: string = 'name';
  searchForm: FormGroup;
  persona: any;
  searchValue: string = '';

  constructor(private formBuilder: FormBuilder, public modalService: BuscadorService) {
    this.searchForm = this.formBuilder.group({
      searchQuery: ['']
    });
    //this.persona ={nombre:'', telefono:'', email:''}
  }

  openModal() {
    console.log('llega aqui')
    this.modalService.openModal();
  }


  limpiar(){
    this.persona=null;
  }

  consultPerson() {
    // Aquí iría la lógica para consultar la persona y retornarla a la pantalla inicial
    // Puedes implementar el servicio para manejar esta lógica también
    // Por simplicidad, aquí solo cerramos la modal
    this.persona= {
      nombre:'Fido',
      telefono: '3183830929',
      email:'farid.ureche@hotmail.com'
  }
  console.log('se jodio pindanga')
    //this.closeModal();
  }
}