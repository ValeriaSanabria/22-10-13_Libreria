"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Libreria = void 0;
var clientes_1 = require("./clientes");
var Libreria = /** @class */ (function (_super) {
    __extends(Libreria, _super);
    function Libreria(pNombreApellido, pDni, pDireccion, pAutorFav, pGenFav, pComprasLibros, pComprasRevistas, pDescuento, pListaClientes, pListaLibros, pListaRevista) {
        var _this = _super.call(this, pNombreApellido, pDni, pDireccion, pAutorFav, pGenFav, pComprasLibros, pComprasRevistas, pDescuento) || this;
        _this.listaClientes = pListaClientes;
        _this.listaLibros = pListaLibros;
        _this.listaRevistas = pListaRevista;
        return _this;
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
    Libreria.prototype.buscarAutor = function (autorBuscado) {
        var auxiliar = 0;
        for (var i = 0; i < this.autoresFavoritos.length; i++) {
            if (autorBuscado === this.autoresFavoritos[i]) {
                console.log("Se encontro el autor favorito");
                auxiliar = 1;
            }
        }
        if (auxiliar === 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Libreria.prototype.conocerLibroRevistaComprado = function (cliente, articulo) {
        var librosComprados = cliente.getComprasLibros();
        var revistasCompradas = cliente.getComprasRevista();
        var compraConfirmada = false;
        for (var i = 0; i < librosComprados.length; i++) {
            if (librosComprados[i].getNombre() === articulo.getNombre()) {
                compraConfirmada = true;
            }
        }
        if (!compraConfirmada) {
            for (var i = 0; i < revistasCompradas.length; i++) {
                if (revistasCompradas[i].getNombre() === articulo.getNombre()) {
                    compraConfirmada = true;
                }
            }
        }
        return compraConfirmada;
    };
    return Libreria;
}(clientes_1.Cliente));
exports.Libreria = Libreria;
