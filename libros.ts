import { Libreria } from "./libreria";

export class Libro extends Libreria{
    protected cantidadPaginas: number;
    protected resumen: string;
    protected generoLiterario: string;

    constructor(pNombre, pAutor, pPrecio, pCantidad: number, pResumen: string, pGenero: string){
        super(pNombre, pAutor, pPrecio);
        this.cantidadPaginas = pCantidad;
        this.resumen = pResumen;
        this.generoLiterario = pGenero;
    }

    public setCantPag(): number{
        return this.cantidadPaginas;
    }

    public getCantPag(pCantidad: number): void{
        this.cantidadPaginas = pCantidad;
    }

    public setResumen(): string{
        return this.resumen;
    }

    public getResumen(pResumen: string): void{
        this.resumen = pResumen;
    }

    public setGenero(): string{
        return this.generoLiterario;
    }

    public getGenero(pGenero: string): void{
        this.generoLiterario = pGenero;
    }
}