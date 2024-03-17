import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaServiceService } from '../../service/persona-service.service';
import { PersonaModel } from './persona.model';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit{

  forma: FormGroup;
  personaModel: PersonaModel = new PersonaModel;

  

  constructor( private fb: FormBuilder, private personaService: PersonaServiceService  ){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)] ],
      telefono:['', [Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
      direccion:['', [Validators.required, Validators.minLength(8)]],
      tipo:['', [Validators.required, Validators.minLength(2)]],
      documento:['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
      
  }

  guardar(forma: FormGroup){

    if (this.forma.invalid){
        console.log('Formulario no valido');
        return Object.values(this.forma.controls).forEach(control => {
            control.markAllAsTouched();
        });
    }else{


    console.log(this.forma);

   this.convertir(forma);

    console.log(this.personaService.getPersona().subscribe(
      resp => console.log(resp)
    ));

   

    this.personaService.postPersona(this.personaModel).subscribe(
      resp1 => {console.log(resp1)}
    );
    }

  }


  convertir(f: FormGroup){
    this.personaModel.documento = f.value.documento;
    this.personaModel.nombre=f.value.nombre;
    this.personaModel.direccion= f.value.direccion;
    this.personaModel.email= f.value.email;
    this.personaModel.telefono= f.value.telefono;
    this.personaModel.tipo_documento = f.value.tipo;
  }




  get nombreValido(){
    return this.forma.get("nombre")?.invalid && this.forma.get("nombre")?.touched;
  }

  get documentoValido(){
    return this.forma.get("documento")?.invalid && this.forma.get("documento")?.touched;
  }

  get telefonoValido(){
    return this.forma.get("telefono")?.invalid && this.forma.get("telefono")?.touched;
  }

  get emailValido(){
    return this.forma.get("email")?.invalid && this.forma.get("email")?.touched;
  }

  get tipoValido(){
    return this.forma.get("tipo")?.invalid && this.forma.get("tipo")?.touched;
  }

  get direccionValido(){
    return this.forma.get("direccion")?.invalid && this.forma.get("direccion")?.touched;
  }

  
  
}

