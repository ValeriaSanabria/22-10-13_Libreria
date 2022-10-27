import {
    Libro
} from "./libros";
import {
    Cliente
} from "./clientes";
import {
    Revista
} from "./revistas";
import {
    Datos
} from "./datosGenericos";

export class Libreria extends Cliente {
    private listaClientes: Cliente[];
    private listaLibros: Libro[];
    private listaRevistas: Revista[];

    constructor(pNombreApellido, pDni, pDireccion, pAutorFav, pGenFav, pCompras, pDescuento, pListaClientes: Cliente[], pListaLibros: Libro[], pListaRevista: Revista[]) {
        super(pNombreApellido, pDni, pDireccion, pAutorFav, pGenFav, pCompras, pDescuento)
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

    public calcularPrecio(cliente: Cliente, articulo: Datos): number {
        let precioConDescuento: number = 0;
        precioConDescuento = articulo.getPrecio() * (1 - cliente.getDescuento());
        return precioConDescuento;
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

    public conocerLibroRevistaComprado(cliente: Cliente, articulo: Datos): boolean {
        let librosComprados: Libro[] = cliente.getComprasLibros();
        let revistasCompradas: Revista[] = cliente.getComprasRevista();
        let compraConfirmada: boolean = false;

        for (let i = 0; i < librosComprados.length; i++) {
            if (librosComprados[i].getNombre() === articulo.getNombre()) {
                compraConfirmada = true;
            }
        }

        if (!compraConfirmada) {
            for (let i = 0; i < revistasCompradas.length; i++) {
                if (revistasCompradas[i].getNombre() === articulo.getNombre()) {
                    compraConfirmada = true;
                }
            }
        }
        return compraConfirmada;
    }

    conocerSiGustaLibro(cliente: Cliente, libro: Libro): boolean {
        let listaLibroFav = cliente.getAutoresFav();

        for (let i = 0; i < this.autoresFavoritos.length; i++) {
            if (this.autoresFavoritos[i].getNombre() === libro.getNombre()) {
                return true;
            }
        }
        return false;
    }
}