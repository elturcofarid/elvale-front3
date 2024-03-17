import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaService } from '../../service/cuenta/cuenta.service';
import { EstablecimientoModel } from '../establecimiento/establecimiento.model';
import { ClienteModel } from '../cliente/cliente.model';
import { FiaoModel } from './fiao.model';
import { FiaoService } from '../../service/fiao/fiao.service';
import { CuentaModel } from '../cuenta/cuenta.model';
import { PersonaModel } from '../persona/persona.model';

@Component({
  selector: 'app-fiao',
  templateUrl: './fiao.component.html',
  styleUrl: './fiao.component.css'
})
export class FiaoComponent implements OnInit{

  forma: FormGroup;
  fiaoModel: FiaoModel = new FiaoModel;

  constructor( private fb: FormBuilder, private fiaoService: FiaoService){
    this.forma = this.fb.group({
      valor: ['', [Validators.required, Validators.minLength(3)]],
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

    this.fiaoService.postFiao(this.fiaoModel).subscribe(
      resp1 => {console.log(resp1)}
    );
    }

  }


  convertir(f: FormGroup){
    this.fiaoModel.valor=f.value.valor;
    this.fiaoModel.cuenta= '660d217b-8fbe-435b-b2bc-578b7410b8a4';
    this.fiaoModel.grabador= '43a8c74f-103e-4dd1-91ea-a6d5b72aff0c';
  }

  get valorValido(){
    return this.forma.get("valor")?.invalid && this.forma.get("valor")?.touched;
  }
  
}
