import { Libro } from "./libros";
import { Revista } from "./revistas";

export class Cliente {
    protected nombreApellido: string;
    protected dni: number;
    protected direccion: string;
    protected autoresFavoritos: string[];
    protected generosFavoritos: string[];
    protected comprasLibro: Libro[];
    protected comprasRevista: Revista[];
    protected descuento: number;

    constructor(pnombreApellido: string, pDni: number, pDireccion: string, pAutorFav: string[], pGenFav: string[], pComprasLibro: Libro[], pComprasRevista: Revista[], pDescuento: number) {
        this.nombreApellido = pnombreApellido;
        this.dni = pDni;
        this.direccion = pDireccion;
        this.autoresFavoritos = pAutorFav;
        this.generosFavoritos = pGenFav;
        this.comprasLibro = pComprasLibro;
        this.comprasRevista = pComprasRevista;
        this.descuento = pDescuento;
    }

    public setNombreApellido(pnombreApellido: string): void {
        this.nombreApellido = pnombreApellido;
    }

    public getNombreApellido() {
        return this.nombreApellido;
    }

    public setDni(pDni: number): void {
        this.dni = pDni;
    }

    public getDni() {
        return this.dni;
    }

    public setDireccion(pDireccion: string): void {
        this.direccion = pDireccion;
    }

    public getDireccion() {
        return this.direccion;
    }

    public getAutoresFav() {
        return this.autoresFavoritos;
    }

    public getGenerosFav() {
        return this.generosFavoritos;
    }

    public getComprasLibros(): Libro[] {
        return this.comprasLibro;
    }

    public getComprasRevista(): Revista[] {
        return this.comprasRevista;
    }

    public setDescuento(pDescuento: number): void {
        this.descuento = pDescuento;
    }

    public getDescuento() {
        return this.descuento;
    }

    public buscarAutor(autorBuscado: string): boolean {
        let auxiliar: number = 0;
        for (let i = 0; i < this.autoresFavoritos.length; i++) {
            if (autorBuscado === this.autoresFavoritos[i]) {
                console.log("Se encontro el autor favorito");
                auxiliar = 1;
            }
        }
        if (auxiliar === 1) {
            return true
        } else {
            return false
        }
    }

}