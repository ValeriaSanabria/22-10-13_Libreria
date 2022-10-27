import {
    Datos
} from "./datosGenericos";

export class Libro extends Datos {
    protected cantidadPaginas: number;
    protected resumen: string;
    protected generoLiterario: string;

    constructor(pNombre, pAutor, pPrecio, pCantidad: number, pResumen: string, pGenero: string) {
        super(pNombre, pAutor, pPrecio);
        this.cantidadPaginas = pCantidad;
        this.resumen = pResumen;
        this.generoLiterario = pGenero;
    }

    public setCantPag(pCantidad: number): void {
        this.cantidadPaginas = pCantidad;
    }

    public getCantPag() {
        return this.cantidadPaginas;
    }

    public setResumen(pResumen: string): void {
        this.resumen = pResumen;
    }

    public getResumen() {
        return this.resumen;
    }

    public setGenero(pGenero: string): void {
        this.generoLiterario = pGenero;
    }

    public getGenero() {
        return this.generoLiterario;
    }
}