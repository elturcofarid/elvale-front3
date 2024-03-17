import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstablecimientoService } from '../../service/establecimiento/establecimiento.service';
import { EstablecimientoModel } from './establecimiento.model';
import { PersonaModel } from '../persona/persona.model';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrl: './establecimiento.component.css'
})
export class EstablecimientoComponent implements OnInit{

  forma: FormGroup;
  establecimientoModel: EstablecimientoModel = new EstablecimientoModel;

  constructor( private fb: FormBuilder, private establecimientoService: EstablecimientoService){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono:['', [Validators.required, Validators.minLength(6)]],
      nit:['', [Validators.required, Validators.minLength(9)]],
      direccion:['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
      
  }

  guardar(forma: FormGroup){

    console.log('ya paso por aqui', forma)
    if (this.forma.invalid){
        return Object.values(this.forma.controls).forEach(control => {
            control.markAllAsTouched();
        });
    }else{

   this.convertir(forma);

    this.establecimientoService.postEstablecimiento(this.establecimientoModel).subscribe(
      resp1 => {console.log(resp1)}
    );
    }

  }


  convertir(f: FormGroup){
    this.establecimientoModel.nombre=f.value.nombre;
    this.establecimientoModel.direccion= f.value.direccion;
    this.establecimientoModel.telefono= f.value.telefono;
    this.establecimientoModel.nit= f.value.nit;
    this.establecimientoModel.propietario= new PersonaModel;
  }




  get nombreValido(){
    return this.forma.get("nombre")?.invalid && this.forma.get("nombre")?.touched;
  }

  get telefonoValido(){
    return this.forma.get("telefono")?.invalid && this.forma.get("telefono")?.touched;
  }

  get nitValido(){
    return this.forma.get("nit")?.invalid && this.forma.get("nit")?.touched;
  }

  get direccionValido(){
    return this.forma.get("direccion")?.invalid && this.forma.get("direccion")?.touched;
  }

  
  
}

