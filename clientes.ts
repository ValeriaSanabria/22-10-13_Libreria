import { Libro } from "./libros";

export class Cliente extends Libro{
    protected nombreApellido: string;
    protected dni: number;
    protected direccion: string;
    protected autoresFavoritos: Libro[];
    protected generosFavoritos: Libro[];
    protected compras: string[];

    constructor(pNombre, pAutor, pPrecio, pCantidad, pResumen, pGenero, pnombreApellido: string, pDni: number, pDireccion: string, pAutorFav: Libro[], pGenFav: Libro[], pCompras: string[]){
        super(pNombre, pAutor, pPrecio, pCantidad, pResumen, pGenero);
        this.nombreApellido = pnombreApellido;
        this.dni = pDni;
        this.direccion = pDireccion;
        this.autoresFavoritos = pAutorFav;
        this.generosFavoritos = pGenFav;
        this.compras = pCompras;
    }

    public setNombreApellido(): string{
        return this.nombreApellido;
    }

    public getNombreApellido(pnombreApellido: string): void{
        this.nombreApellido = pnombreApellido;
    }

    public setDni(): number{
        return this.dni;
    }

    public getDni(pDni: number): void{
        this.dni = pDni;
    }

    public setDireccion(): string{
        return this.direccion; 
    }

    public getDireccion(pDireccion: string): void{
        this.direccion = pDireccion;
    }

    public buscarAutor(autorBuscado: Libro): boolean{
        let auxiliar: number = 0;
        for(let i = 0; i < this.autoresFavoritos.length; i++){
            if (autorBuscado === this.autoresFavoritos[i]){
                console.log("Se encontro el autor favorito");
                auxiliar = 1;
            }
        }
        if (auxiliar === 1){
            return true
        } else {
            return false
        }
    }

}