import {
    Libreria
} from "./libreria";
import {
    Libro
} from "./libros";
import {
    Revista
} from "./revistas";
import {
    Cliente
} from "./clientes";

let autorFavC1 = ["Gabriel Garcia Marquez", "Fontanarrosa", "Julio Verne"];
let genFavC1 = ["Comedia", "Accion"]
let comprasC1 = ["La bella y la bestia"]
let cliente1 = new Cliente("Juan Hernandez", 34532354, "Alem 454", autorFavC1, genFavC1, [], [], 0.1);

console.log(cliente1.buscarAutor("Fontanarrosa"));
