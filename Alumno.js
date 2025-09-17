export default class Alumno{
    constructor(id, nombre, apellidoPaterno, apellidoMaterno){
        this.id = id;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }

    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
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
}