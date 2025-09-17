import Alumno from './Alumno.js'
import Carrera from './Carrera.js';

var alumnosRegistrados;
var carrerasRegistradas;

function desplegarMenu(){
    let i = true;
    while(i == true){
        console.log("Hola! Bienvenido al sistema de gestion de Alumnado y Carreras de ITSON.");
        console.log("ingrese la opcion a la que quiere acceder:");
        console.log("1. Alumnos.");
        console.log("2. Carrera.");
        console.log("3. Salir del sistema.");
        let a ;// checar lo q dice y cambiarle el nombre a la variable 
        switch(a){
            case 1:
                console.log("Bienvenido al apartado de Alumnos");
                break;
        }
    }
}



function agregarAlumno(id, nombre, apellidoPaterno, apellidoMaterno){
    alumnosRegistrados.push(new Alumno(id, nombre, apellidoPaterno, apellidoMaterno));
}

function borrarAlumno(alumno){
    let posi = AlumnosRegistrados.indexOf(alumno);
    if (posi != -1){
        alumnosRegistrados.splice(posi, 1);
    } else {
        console.log("Alumno no encontrado!");
    }
}

function cambiarAlumno(alumnoViejo, alumnoCambiado){
    let posi = AlumnosRegistrados.indexOf(alumnoViejo);
    if (posi != -1){
        alumnosRegistrados[posi].setId(alumnoCambiado.getId);
        alumnosRegistrados[posi].setNombre(alumnoCambiado.getNombre);
        alumnosRegistrados[posi].setApellidoPaterno(alumnoCambiado.getApellidoPaterno);
        alumnosRegistrados[posi].setApellidoMaterno(alumnoCambiado.getApellidoMaterno);
    } else {
        console.log("Alumno no encontrado!");
    }
}

function agregarCarrera(nombre, cordinado, alumnos){
    carrerasRegistradas.push(Carrera(nombre, cordinado, alumnos));
}

function borrarCarrera(carrera){
    let posi = carrerasRegistradas.indexOf(carrera);
    if(posi != -1){
        carrerasRegistradas.splice(posi, 1);
    } else {
        console.log("Carrera no encontrada!");
    }
}

function cambiarCarrera(carreraVieja, carreraCambiada){
    let posi = carrerasRegistradas.indexOf(carreraVieja);
    if(posi != -1){
        carrerasRegistradas[posi].setNombre(carreraCambiada.getNombre);
        carrerasRegistradas[posi].setCordinador(carreraCambiada.getCordinador);
        carrerasRegistradas[posi].setAlumnos(carreraCambiada.getAlumnos);
    } else {
        console.log("Carrera no encontrada!")
    }
}