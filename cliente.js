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
    Cliente.prototype.leGustaLibro = function (libro) {
        var encontrado = false;
        for (var i = 0; i < this.autoresFavoritos.length; i++) {
            if (libro.getAutor() === this.autoresFavoritos[i]) {
                encontrado = true;
            }
        }
        return encontrado;
    };
    Cliente.prototype.leGustaLibroExigente = function (libro) {
        var encontradoAutor = false;
        var encontradoGenero = false;
        for (var i = 0; i < this.autoresFavoritos.length; i++) {
            if (libro.getAutor() === this.autoresFavoritos[i]) {
                encontradoAutor = true;
                for (var i_1 = 0; i_1 < this.generosFavoritos.length; i_1++) {
                    if (libro.getGenero() === this.generosFavoritos[i_1]) {
                        encontradoGenero = true;
                    }
                }
            }
        }
        return encontradoAutor && encontradoGenero;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
