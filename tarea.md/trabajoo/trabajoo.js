'use strict';
/*Crear una función que filtre los valores mayores a 10.00 y redondearlos a 2 decimales como string.
 Retornando un array. */

function filterAndRound(nums) {
    return nums
        .filter(num => num > 10.00) // Filtrar valores mayores a 10.00
        .map(num => num.toFixed(2)); // Redondear a 2 decimales y convertir a string
}
 let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];
let result = filterAndRound(nums);
alert(result); 

/*Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. 
La función debe recibir el array y devolver únicamente la parte entera del promedio.*/

function calcularPromedio(calificaciones) {
   
    if (calificaciones.length === 0) {
        return 0; 
    }
    
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    
    let promedio = suma / calificaciones.length;
    
    return Math.floor(promedio);
}

let calificaciones = [85, 90, 78, 92, 88];
alert(calcularPromedio(calificaciones)); 

/*Crear un array de objetos con la informacion de las asignaturas de la carrera de Desarrollo de software.  
Crear una función que reciba como parámetro el array de las asignaturas y un numero que indique el nivel. 
La función debe retornar solo las asignaturas que pertenecen a ese nivel. */

let asignaturas = [
    // Primer nivel
    { asignatura: "MATEMATICA COMPUTACIONAL", nivel: 1 },
    { asignatura: "METODOLOGÍAS PARA RESOLVER PROBLEMAS INFORMÁTICOS", nivel: 1 },
    { asignatura: "BASE DE DATOS RELACIONALES", nivel: 1 },
    { asignatura: "LAS TICS Y SOPORTE EN HARDWARE PROGRAMACIÓN DE INTERFACES GRÁFICAS Y ESTRUCTURA DE DATOS", nivel: 1 },
    { asignatura: "PROYECTO INTEGRADOR DE SABERES", nivel: 1 },

    // Segundo nivel
    { asignatura: "SISTEMAS DIGITALES PROGRAMABLES", nivel: 2 },
    { asignatura: "SISTEMAS DE INFORMACIÓN", nivel: 2 },
    { asignatura: "PROGRAMACIÓN ORIENTADA A OBJETOS", nivel: 2 },
    { asignatura: "PROCESOS CONTABLES", nivel: 2 },
    { asignatura: "GESTIÓN DE BASE DE DATOS", nivel: 2 },
    { asignatura: "PROYECTO INTEGRADOR DE SABERES", nivel: 2 },

    // Tercer nivel
    { asignatura: "PROGRAMACION DE APLICACIONES PARA DISPOSITIVOS MOVILES", nivel: 3 },
    { asignatura: "PROBABILIDADES Y PROCESOS ESTOCÁSTICOS", nivel: 3 },
    { asignatura: "HERRAMIENTAS INFORMÁTICAS PARA EL DESPLIEGUE DE DIAGRAMAS", nivel: 3 },
    { asignatura: "APLICACIONES TECNOLOGICAS AUTONOMAS", nivel: 3 },
    { asignatura: "SOFTWARE APLICATIVO", nivel: 3 },
    { asignatura: "PROYECTO INTEGRADOR DE SABERES CREACION DE APLICACIONES WEB ", nivel: 3 },

    // Cuarto nivel
    { asignatura: "COMUNICACIONES Y REDES DE DATOS", nivel: 4 },
    { asignatura: "SISTEMAS OPERATIVOS", nivel: 4 },
    { asignatura: "HERRAMIENTAS CASE", nivel: 4 },
    { asignatura: "DERECHO Y SEGURIDAD INFORMATICA", nivel: 4 },
    { asignatura: "TENDENCIAS TECNOLÓGICAS", nivel: 4 },
    { asignatura: "DESARROLLO DE PROYECTOS DE SOFTWARE", nivel: 4 }
];

// Función para filtrar por nivel
function filtrarPorNivel(asignaturas, nivel) {
    return asignaturas.filter(asignatura => asignatura.nivel === nivel);
}


let nivel = 4; 
let asignaturasNivel = filtrarPorNivel(asignaturas, nivel);

// Crear un mensaje con las asignaturas del nivel seleccionado
let mensaje = `Asignaturas del nivel ${nivel}:\n`;
asignaturasNivel.forEach(asignatura => {
    mensaje += `${asignatura.asignatura}\n`;
});


alert(mensaje);
