import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit{

  forma: FormGroup;

  constructor( private fb: FormBuilder){
    this.forma = this.fb.group({
      nombre: [''],
      telefono:[''],
      email:[''],
      direccion:[''],
      tipo_documento:[''],
      documento:[''],
    });
  }

  ngOnInit(): void {
      
  }

  guardar(){
    console.log(this.forma);
  }
}

