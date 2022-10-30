import {
    Libro
} from "./libro";
import {
    Cliente
} from "./cliente";
import {
    Revista
} from "./revista";
import {
    Articulo
} from "./articulo";

export class Libreria {
    private listaClientes: Cliente[];
    private listaLibros: Libro[];
    private listaRevistas: Revista[];

    public constructor(pListaClientes: Cliente[], pListaLibros: Libro[], pListaRevista: Revista[]) {
        this.listaClientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevista;
    }

    public setRevista(nuevaRevista: Revista): void {
        this.listaRevistas.push(nuevaRevista);
    }

    public setLibro(nuevoLibro: Libro): void {
        this.listaLibros.push(nuevoLibro);
    }

    public setCliente(nuevoCliente: Cliente): void {
        this.listaClientes.push(nuevoCliente);
    }

    public calcularPrecio(cliente: Cliente, articulo: Articulo): number {
        let precioConDescuento: number = 0;
        precioConDescuento = articulo.getPrecio() * (1 - cliente.getDescuento());
        return precioConDescuento;
    }

    public libroRevistaComprado(cliente: Cliente, articulo: Articulo): boolean {
        let encontrado: boolean = false;
        let listaLibrosRevistas = [ ...cliente.getComprasLibros().concat(), ...cliente.getComprasRevista()];

        for (let i: number = 0; i < listaLibrosRevistas.length; i++) {
            if (articulo.getNombre() === listaLibrosRevistas[i].getNombre()) {
                encontrado = true;
            }
        }
        
        return encontrado;
    }
}