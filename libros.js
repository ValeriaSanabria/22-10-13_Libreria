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
exports.Libro = void 0;
var datosGenericos_1 = require("./datosGenericos");
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(pNombre, pAutor, pPrecio, pCantidad, pResumen, pGenero) {
        var _this = _super.call(this, pNombre, pAutor, pPrecio) || this;
        _this.cantidadPaginas = pCantidad;
        _this.resumen = pResumen;
        _this.generoLiterario = pGenero;
        return _this;
    }
    Libro.prototype.setCantPag = function (pCantidad) {
        this.cantidadPaginas = pCantidad;
    };
    Libro.prototype.getCantPag = function () {
        return this.cantidadPaginas;
    };
    Libro.prototype.setResumen = function (pResumen) {
        this.resumen = pResumen;
    };
    Libro.prototype.getResumen = function () {
        return this.resumen;
    };
    Libro.prototype.setGenero = function (pGenero) {
        this.generoLiterario = pGenero;
    };
    Libro.prototype.getGenero = function () {
        return this.generoLiterario;
    };
    return Libro;
}(datosGenericos_1.Datos));
exports.Libro = Libro;
