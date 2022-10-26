import { Libreria } from "./libreria";

export class Revista extends Libreria{
    protected numero: number;
    protected año: number;

    constructor(pNombre, pAutor, pPrecio, pNumero: number, pAño: number){
        super(pNombre, pAutor, pPrecio);
        this.numero = pNumero;
        this.año = pAño;
    }

    
}