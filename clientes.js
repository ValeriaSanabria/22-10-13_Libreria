"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(pnombreApellido, pDni, pDireccion, pAutorFav, pGenFav, pComprasLibro, pComprasRevista, pDescuento) {
        this.nombreApellido = pnombreApellido;
        this.dni = pDni;
        this.direccion = pDireccion;
        this.autoresFavoritos = pAutorFav;
        this.generosFavoritos = pGenFav;
        this.comprasLibro = pComprasLibro;
        this.comprasRevista = pComprasRevista;
        this.descuento = pDescuento;
    }
    Cliente.prototype.setNombreApellido = function (pnombreApellido) {
        this.nombreApellido = pnombreApellido;
    };
    Cliente.prototype.getNombreApellido = function () {
        return this.nombreApellido;
    };
    Cliente.prototype.setDni = function (pDni) {
        this.dni = pDni;
    };
    Cliente.prototype.getDni = function () {
        return this.dni;
    };
    Cliente.prototype.setDireccion = function (pDireccion) {
        this.direccion = pDireccion;
    };
    Cliente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Cliente.prototype.getAutoresFav = function () {
        return this.autoresFavoritos;
    };
    Cliente.prototype.getGenerosFav = function () {
        return this.generosFavoritos;
    };
    Cliente.prototype.getComprasLibros = function () {
        return this.comprasLibro;
    };
    Cliente.prototype.getComprasRevista = function () {
        return this.comprasRevista;
    };
    Cliente.prototype.setDescuento = function (pDescuento) {
        this.descuento = pDescuento;
    };
    Cliente.prototype.getDescuento = function () {
        return this.descuento;
    };
    Cliente.prototype.buscarAutor = function (autorBuscado) {
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
    return Cliente;
}());
exports.Cliente = Cliente;
