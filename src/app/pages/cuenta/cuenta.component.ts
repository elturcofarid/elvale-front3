import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaModel } from './cuenta.model';
import { CuentaService } from '../../service/cuenta/cuenta.service';
import { EstablecimientoModel } from '../establecimiento/establecimiento.model';
import { ClienteModel } from '../cliente/cliente.model';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent implements OnInit{

  forma: FormGroup;
  cuentaModel: CuentaModel = new CuentaModel;

  constructor( private fb: FormBuilder, private cuentaService: CuentaService){
    this.forma = this.fb.group({
      alias: ['', [Validators.required, Validators.minLength(3)]],
      aprobado:['', [Validators.required]],
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

    this.cuentaService.postCuenta(this.cuentaModel).subscribe(
      resp1 => {console.log(resp1)}
    );
    }

  }


  convertir(f: FormGroup){
    this.cuentaModel.alias=f.value.alias;
    this.cuentaModel.creditoAprobado= f.value.aprobado;
    this.cuentaModel.establecimiento= new EstablecimientoModel;
    this.cuentaModel.cliente= new ClienteModel;
  }




  get aliasValido(){
    return this.forma.get("alias")?.invalid && this.forma.get("alias")?.touched;
  }

  get aprobadoValido(){
    return this.forma.get("aprobado")?.invalid && this.forma.get("aprobado")?.touched;
  }

 
  
  
}
