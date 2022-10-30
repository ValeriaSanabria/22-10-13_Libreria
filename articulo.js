"use strict";
exports.__esModule = true;
exports.Articulo = void 0;
var Articulo = /** @class */ (function () {
    function Articulo(pNombre, pAutor, pPrecio) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.precio = pPrecio;
    }
    Articulo.prototype.getNombre = function () {
        return this.nombre;
    };
    Articulo.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Articulo.prototype.getAutor = function () {
        return this.autor;
    };
    Articulo.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Articulo.prototype.getPrecio = function () {
        return this.precio;
    };
    Articulo.prototype.setPrecio = function (pPrecio) {
        this.precio = pPrecio;
    };
    return Articulo;
}());
exports.Articulo = Articulo;
