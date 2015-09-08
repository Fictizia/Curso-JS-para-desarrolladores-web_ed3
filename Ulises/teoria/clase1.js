/*== Clase 1 ==*/

/* TEORÍA */

//Modo Strict

(function() {
  "use strict";

  // Nuestro código

})();


// Variables
var con espacios = 1; // ERROR, no se pueden usar espacios
var 1numero = 1; // ERROR, no usar un número delante
var con_guiones_bajos = 1; // Válido pero no recomendado
var dame$ = 1; // Válido pero no recomendado
var otraOpcion = 1; // CORRECTO
var opcionCon123123 = 1; // CORRECTO


// Tipos de variables
typeof true;
typeof "texto";
typeof 1;
typeof undefined;
typeof null;


// Matemáticas Básicas
var suma = 5 + 4; 
var resta = 10 - 6; 
var multiplicacion = 3 * 3; 
var division = 6 / 2; 
var modulo = 43 % 10; 


// Matemaáticas (Agrupando Operaciones)
var expresion1 = (3 + 7) * 10;
var expresion2 = (-56 * 6) - 74 * -25;
var expresion3 = (3 * 3) + 10 - 12 / 2;
var expresion4 = 44 + (83 % (33 + 100));
var expresion5 = -145 + (500 / 10 - 5) + 10 * 10 ;

function calcular (operacion) {
	console.log(operacion);
};



/*  --while--
while (-algo verdadero-) {
	-ejecutamos este dódigo-
};
Documentación:
- http://www.w3schools.com/js/js_loop_while.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
*/

// Loop infinito 
while (true) {
	console.log("Este texto se imprime hasta el infinito...");
};

// Loop que no se ejecutará
while (false) {
	console.log("Este texto jamas se imprimira...");
};

// Ejemplo
var control = 1;
while (control <= 10) {
	console.log(control);
	control++;
};


/*  --for--
for (-inicializando-; -algo verdadero-; -ejecutar al terminar cada vuelta-) {
	-ejecutamos este dódigo-
};
Documentación:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
- http://www.w3schools.com/js/js_loop_for.asp
*/

for (var elNumero = 1; elNumero <= 10; elNumero++) {
	console.log("repeticion número "+elNumero);
};


/*= EJERCICIOS =*/

// Nº 1
// Quiero saber cuántos trenes hay operativos partiendo de dos variables
// En formato del mensaje es -> "x de x trenes operativos". 

var trenesOperativos = 8;
var totalTrenes = 12;
var estadoOperacional = " trenes funcionando hoy."

function estadoVia () {
	console.log(trenesOperativos+ " de "+totalTrenes+estadoOperacional);
};


// Nº 2
// Imprimimos por consola el estado de cada tren en movimiento de manera individualizada.

console.log("El tren numero "+1+" esta funcionando");
console.log("El tren numero "+2+" esta funcionando");
console.log("El tren numero "+3+" esta funcionando");
console.log("El tren numero "+4+" esta funcionando");
console.log("El tren numero "+5+" esta funcionando");
console.log("El tren numero "+6+" esta funcionando");
console.log("El tren numero "+7+" esta funcionando");
console.log("El tren numero "+8+" esta funcionando");


// Nº 3
// Refactoriza... usando un loop. 

var trenesOperativos = 8;
var numeroTren = 1; // Primer tren funcionando

function estadoDetalle () {
	while (numeroTren <= trenesOperativos) {
		console.log("El tren número "+numeroTren+" esta funcionando");
		numeroTren++;
	};
};


// Nº 4
// Refactoriza.. usando for. 

var trenesOperativos = 8;

function estadoDetalle () {
	for (var numeroTren = 1; numeroTren <= trenesOperativos; numeroTren++) {
		console.log("El tren numero "+numeroTren+" esta funcionando");
	};
};
