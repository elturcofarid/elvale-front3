import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrl: './establecimiento.component.css'
})
export class EstablecimientoComponent implements OnInit{

  forma: FormGroup;

  constructor( private fb: FormBuilder){
    this.forma = this.fb.group({
      nombre: [''],
      telefono:[''],
      nit:[''],
      direccion:[''],
    });
  }

  ngOnInit(): void {
      
  }

  guardar(){
    console.log(this.forma);
  }
}

{

}
