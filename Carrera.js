export default class Carrera{
    constructor(nombre, cordinador, alumnos){
        this.nombre = nombre;
        this.cordinador = cordinador;
        this.alumnos = alumnos;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getCordinador(){
        return this.cordinador;
    }

    setCordinador(cordinador){
        this.cordinador = cordinador;
    }
    
    getAlumnos(){
        return this.alumnos;
    }

    setAlumnos(alumnos){
        this.alumnos = alumnos;
    }

}