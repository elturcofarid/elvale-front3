import { PersonaModel } from "../persona/persona.model";

export class EstablecimientoModel {

    nombre!: string;
    telefono!: string;
    nit!: string;
    direccion!: string;
    propietario!: PersonaModel;
    id!: string;

    constructor() {
        this.id = '920e0a3e-d549-41ba-9d2c-abc055b29447';
       
    }

}