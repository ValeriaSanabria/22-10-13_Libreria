"use strict";
exports.__esModule = true;
exports.Datos = void 0;
var Datos = /** @class */ (function () {
    function Datos(pNombre, pAutor, pPrecio) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.precio = pPrecio;
    }
    Datos.prototype.getNombre = function () {
        return this.nombre;
    };
    Datos.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Datos.prototype.getAutor = function () {
        return this.autor;
    };
    Datos.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Datos.prototype.getPrecio = function () {
        return this.precio;
    };
    Datos.prototype.setPrecio = function (pPrecio) {
        this.precio = pPrecio;
    };
    return Datos;
}());
exports.Datos = Datos;
