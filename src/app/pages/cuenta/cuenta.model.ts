import { ClienteModel } from "../cliente/cliente.model";
import { EstablecimientoModel } from "../establecimiento/establecimiento.model";

export class CuentaModel {

    alias!: string;
    creditoAprobado!: string;
    establecimiento!: EstablecimientoModel;
    cliente!: ClienteModel;
    id!: string;

    constructor() {
       this.id= '660d217b-8fbe-435b-b2bc-578b7410b8a4';
    }

}