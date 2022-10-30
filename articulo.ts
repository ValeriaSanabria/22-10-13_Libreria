export class Articulo {
    protected nombre: string;
    protected autor: string;
    protected precio: number;

    constructor(pNombre: string, pAutor: string, pPrecio: number) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.precio = pPrecio;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(pAutor: string): void {
        this.autor = pAutor;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(pPrecio: number): void {
        this.precio = pPrecio;
    }
}