"use strict";
exports.__esModule = true;
var clientes_1 = require("./clientes");
var autorFavC1 = ["Gabriel Garcia Marquez", "Fontanarrosa", "Julio Verne"];
var genFavC1 = ["Comedia", "Accion"];
var comprasC1 = ["La bella y la bestia"];
var cliente1 = new clientes_1.Cliente("Juan Hernandez", 34532354, "Alem 454", autorFavC1, genFavC1, [], [], 0.1);
console.log(cliente1.buscarAutor("Fontanarrosa"));
