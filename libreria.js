"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Libreria = void 0;
var Libreria = /** @class */ (function () {
    function Libreria(pListaClientes, pListaLibros, pListaRevista) {
        this.listaClientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevista;
    }
    Libreria.prototype.setRevista = function (nuevaRevista) {
        this.listaRevistas.push(nuevaRevista);
    };
    Libreria.prototype.setLibro = function (nuevoLibro) {
        this.listaLibros.push(nuevoLibro);
    };
    Libreria.prototype.setCliente = function (nuevoCliente) {
        this.listaClientes.push(nuevoCliente);
    };
    Libreria.prototype.calcularPrecio = function (cliente, articulo) {
        var precioConDescuento = 0;
        precioConDescuento = articulo.getPrecio() * (1 - cliente.getDescuento());
        return precioConDescuento;
    };
    Libreria.prototype.libroRevistaComprado = function (cliente, articulo) {
        var encontrado = false;
        var listaLibrosRevistas = __spreadArray(__spreadArray([], cliente.getComprasLibros().concat(), true), cliente.getComprasRevista(), true);
        for (var i = 0; i < listaLibrosRevistas.length; i++) {
            if (articulo.getNombre() === listaLibrosRevistas[i].getNombre()) {
                encontrado = true;
            }
        }
        return encontrado;
    };
    return Libreria;
}());
exports.Libreria = Libreria;
