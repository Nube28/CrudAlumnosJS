export default class Alumnos{
    constructor(nombre, apellidoPaterno, apellidoMaterno, clases){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.clases = clases;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellidoPaterno(){
        return this.apellidoPaterno;
    }

    setApellidoPaterno(apellidoPaterno){
        this.apellidoPaterno = apellidoPaterno;
    }

    getApellidoMaterno(){
        return this.apellidoMaterno;
    }

    setApellidoMaterno(apellidoMaterno){
        this.apellidoMaterno = apellidoMaterno;
    }

    addClase(clases){
        this.clases.push(clases);
    }    
    
    removeClase(clases){
        let pos = this.clases.indexOf(clases);
        this.clases.splice(pos, 1);
    }
}