/*== Clase 1 ==*/

/* TEORÍA */


/* --FUNCIONES-- */

// Declaracón y ejecución

dameTrue();

function dameTrue (){
	return true
};

dameFalse();

function dameFalse () {
	return false
};


// Ejercicio - Suma de Cuadrados
function sumaCuadrados (a, b) {
	return (a*a) + (b*b);
};




// Contar las veces que aparece una letra en un texto.
function cuentaLetra(frase, letra){
	var total = 0;
	for(var cuenta = 0; cuenta < frase.length; cuenta++){
		if (frase.charAt(cuenta) == letra){
			total++;
		};
	};
	console.log("Tenemos "+total+" veces la letra \""+letra+"\" en la frase \""+frase+"\"" );
};




// Contar las veces que aparece una letra en un texto, pregutando al usuario.
function cuentaLetraUsuario (){
	var frase = prompt("El texto, amigo");
	var letra = prompt("una letra!");
	if (typeof(frase) != String || typeof(letra) != String) {
		alert("mmm.... no me gustan los tramposos!");
		return false;
	} else {
		var total = 0;
		for(var cuenta = 0; cuenta < frase.length; cuenta++){
			if(frase.charAt(cuenta) == letra){
				total++
			};
		}
		alert("Tenemos "+total+" veces la letra \""+letra+"\" en la frase \""+frase+"\"" );
		return true;
	};
};


/*
	SCOPE
*/

var numero = 450;
var otroNumero = 23;

function sumaCuadrados (a, b) {
	var numero = a;
	var otroNumero = b;
	var calculo = (numero*numero) + (otroNumero*otroNumero);
	console.log("\"numero\" es \""+numero+"\", local");
	console.log("\"otroNumero\" es \""+otroNumero+"\", local");
};

function verificarGlobales() {
	console.log("\"numero\" es \""+numero+"\", global");
	console.log("\"otroNumero\" es \""+otroNumero+"\", global");
};


// --FUNCIONES AVANZADAS--

// Anónimas (expresiones)
var sumaCuadrados = function (a, b) {
	return (a*a) + (b*b);
};


// Funciones como datos
function saludo () {
	console.log("hola!");
};

function lanzar (funcion){
	funcion();
};

// Funciones anónimas autoejecutables
(function() { 
	console.log("hola Amigo/a") 
	
}) (); //ex:Jquery

// Funciones anónimas con parámetros
( function(quien){
   console.log("hola " + quien);
})("Amigo/a");


// Función que devuelve una función anónima.
// Opción1 - Asignando una variable
function saludo(quien){
        return function(){
                alert("hola " + quien);
        }
}
var saluda = saludo("Amigo/a");
saluda();

// Opción2 - Sin asignar una variable
function saludo(quien){
        return function(){
                alert("hola " + quien);
        }
}
saludo("Amigo/a")();


// ANIDACIÓN
function saludar(quien){
        function alertasaludo(){
                console.log("hola " +  quien);
        }
        return alertasaludo;
}
var saluda = saludar("Amigo/a");
saluda();

// ANIDACIÓN (AUTOEJECUTABLE)
function saludar(quien){
        function alertasaludo(){
                console.log("hola " +  quien);
        }
        return alertasaludo;
}
saludar("Amigo/a")();

// Quiero saber si hoy es un día par o impar. 
var miDiaEs = (function() {
    var hoy = new Date()
    if (new Date().getDate() % 2 == 0) {
        return function() { alert("hoy es un dia par") }
    } else {
        return function() { alert("hoy es un dia impar") }
    }
})()
miDiaEs();


/* CLOSURES - 
Un closure es un tipo especial de objeto que combina dos cosas: 
una función, y el entorno en que se creó esa función.
https://developer.mozilla.org/es/docs/Web/JavaScript/Closures
*/

// Fábrica de función
function sumador(x) {
  return function(y) {
    return x + y;
  };
}

var sum1 = sumador(10); //Closure
var sum2 = sumador(30);	//Closure

console.log(sum1(2)); // Devuelve 12
console.log(sum2(2)); // Devuelve 32 
console.log(sumador(20)(2)); //Devuelve 22


// Otro ejemplo, ahora temporizado
function saludar(segundos){
	var hola = "Hola, Hola!";
	
	setTimeout(function(){
		console.info(hola);
	},segundos*1000);
}

saludar(2);

// --SWITCH--

// Casos únicos

var nombre = "";
switch (nombre) {
  case "Pepe":
    console.log("Hola Pepe");
    break;
  case "Luis":
    console.log("Hola Luis");
    break;
  case "Antonio":
    console.log("Hola Antonio");
    break;
  default:
    console.log('Ninguno de los nombres que pensamos... es '+nombre);
}

// Multiples coincidencias
var nombre = "";
switch (nombre)
{
   case "Pepe":
   case "Luis":
   case "Antonio": 
       alert('Hola '+nombre);
       break;

   default: 
       console.log('Ninguno de los nombres que pensamos... es '+nombre);
}


/*= EJERCICIOS =*/

// Nº 13
// Hagamos una lista de pasajeros

var pasajero1 = "Alicia Gutierrez";
var pasajero2 = "Alfonso Gómez";
var pasajero3 = "Luis Navarro";
var pasajero4 = "Oscar García";
var pasajero5 = "Andres Fernandez";
var pasajero6 = "Lucia Mellado";


// Nº 14
// Hagamos una lista de pasajeros efectiva usando Arrays

var pasajeros = ["Alicia Gutierrez", "Alfonso Gómez", "Luis Navarro", "Oscar García", "Andres Fernandez", "Lucia Mellado"];


// Nº 15
/* 
Imprimamos cada pasajero de la lista y su número de asiento (basado en el orden del índice).
Nota: El primer asiento del tren es el 1 y no el 0.
*/


var pasajeros = ["Alicia Gutierrez", "Alfonso Gómez", "Luis Navarro", "Oscar García", "Andres Fernandez", "Lucia Mellado"];

function listaPasajeros(){
	for (var i = 0; i < pasajeros.length; i++) {
		console.log("El pasajero "+pasajeros[i]+" tiene reservado el asiento "+(i+1));
	};
};



// Nº 16
/* 
Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
Nota: Pensemos que a la larga pueden existir más listas. 
*/

var pasajeros = ["Alicia Gutierrez", "Alfonso Gómez", "Luis Navarro", "Oscar García", "Andres Fernandez", "Lucia Mellado"];

function agregarPasajero(nombre, lista) {
	lista.push(nombre);
};

//OP.1
function quitarPasajero(nombre, lista) {
	if (lista.length == 0) {
		console.log("La lista \""+lista+"\" esta vacia.");
	} else {
		for (var i = 0; i < lista.length; i++) {
			if(lista[i] == nombre){
				lista.splice(i, 1);
				return lista;
			} else if (i == lista.length -1){
				console.log("El pasajero \""+nombre+"\" no encontrado!")
			};
		};
	};
}; 

//OP.2
function agregarPasajero(nombre, lista) {
	lista.push(nombre);
};


function quitarPasajero(nombre, lista) {
	if (lista.length == 0) {
		console.log("La lista \""+lista+"\" esta vacia.");
	} else {
		for (var i = 0; i < lista.length; i++) {
			if(lista[i] == nombre){
				lista.splice(i, 1);
				return lista;
			} else {
				console.log("El pasajero \""+nombre+"\" no encontrado!")
				return
			};
		};
	};
}; 


// Nº 17
/* La compañia de trenes ha decidido que los viajeros podran reservar el asiento asignado y evitar cambios de última hora 
   Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados
*/

var pasajeros = ["Alicia Gutierrez", "Alfonso Gómez", "Luis Navarro", "Oscar García", "Andres Fernandez", "Lucia Mellado"];

function agregarPasajero(nombre, lista) {
	if(lista.length == 0){
		lista.push(nombre);
		console.log("El pasajero "+nombre+" añadido con exito, asiento asignado 0");
	}else {
		for (var i = 0; i < lista.length; i++) {
			if (lista[i] == undefined) {
				lista[i] = nombre;
				console.log("El pasajero "+nombre+" añadido con exito, asiento asignado "+(i+1));
			} else if (i == lista.length -1){
				lista.push(nombre);
				console.log("El pasajero "+nombre+" añadido con exito, asiento asignado "+(i+1));
				console.log("INFO: En esta lista no quedan asientos pendientes de asignación.")
				return
			};
		};
	};
};


function quitarPasajero(nombre, lista) {
	if (lista.length == 0) {
		console.log("La lista \""+lista+"\" esta vacia.");
	} else {
		for (var i = 0; i < lista.length; i++) {
			if(lista[i] == nombre){
				lista[i] = undefined;
				console.log("El pasajero \""+nombre+"\" eliminado con exito!")
				return lista;
			} else if (i == lista.length -1){
				console.log("El pasajero \""+nombre+"\" no encontrado!");
			};
		};
	};
}; 
