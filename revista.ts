import {
    Articulo
} from "./articulo";

export class Revista extends Articulo {
    protected numero: number;
    protected año: number;

    constructor(pNombre, pAutor, pPrecio, pNumero: number, pAño: number) {
        super(pNombre, pAutor, pPrecio);
        this.numero = pNumero;
        this.año = pAño;
    }

    public setNumero(pNumero: number): void {
        this.numero = pNumero;
    }

    public getNumero() {
        return this.numero;
    }

    public setAño(pAño: number): void {
        this.año = pAño;
    }

    public getAño() {
        return this.año;
    }
}