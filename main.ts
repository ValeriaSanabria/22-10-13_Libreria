import { Libreria } from "./libreria";
import { Libro } from "./libros";
import { Revista } from "./revistas";
import { Cliente } from "./clientes";

let autorFavC1 = ["Gabriel Garcia Marquez", "Fontanarrosa", "Julio Verne"];
let genFavC1 = ["Comedia", "Accion"]
let comprasC1 = ["La bella y la bestia"]
let cliente1 = new Cliente("Juan Hernandez", 34532354, "Alem 454", autorFavC1, genFavC1, [], [], 0.1);

console.log(cliente1.buscarAutor("Fontanarrosa"));





























/*let autores = ['Pedro','Rosa','Juan','Araceli'];
let generos= ['Drama','Terror','Comedia','Vaqueros'];
let cliente1:Cliente=new Cliente('Juan','Perez',11111,'Velez Sarfield',autores,generos,0.1);
let cliente2:Cliente=new Cliente('Hernan','Rodriguez',112212,'Nuñez',autores,generos,0.3);

let libro1:Libro=new Libro('Campanita',50,'Pedro',200,'Comedia','sadfasdasdasdasdsad');
let libro2:Libro=new Libro('iron man',150,'Juan',300,'Drama','asfasdadqdq');
let revista1:Revista=new Revista('Para ti',20,'Rosa',20,5,2022);
let revista2:Revista=new Revista('Oeste',15,'Araceli',12,4,2021);

let arregloCliente:Cliente[]=[cliente1,cliente2];
let arregloLibro:Libro[]=[libro1,libro2];
let arregloRevista:Revista[]=[revista1,revista2];

let libreria1:Libreria=new Libreria(arregloCliente,arregloLibro,arregloRevista);

let primerPrecio=libreria1.calcularPrecio(cliente1,libro1);
console.log(primerPrecio);



//10% descuento
//15% descuento
//30% descuento





PABLOADBES
