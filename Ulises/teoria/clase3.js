/*== Clase 3 ==*/

/* TEORÍA */

/* --Condiciones-- */

/*  --IF ELSE--

if (-algo verdadero-) {
	-ejecutaremos este código-
} else {
	-Si lo anterior no era verdadero, se ejecutara este código-
};

*/

if (true) {
	console.log("true, por eso me ejecuto");
} else {
	console.log("false, por eso me ejecuto");
}


// else if 
function testCondiccion (condicion){
	if (condicion == 1) {
		console.log("1, por eso me ejecuto");
	} else if (condicion == 2){	
		console.log("2, por eso me ejecuto");
	} else {
		console.log("no es 1 o 2, por eso me ejecuto");
	}
}

// AND(&&) y OR(||)

/*

-------- && -----------
true && true -> true
true && false -> false
false && false -> false
false && true -> false

-------- || -----------

true || true -> true
true || false -> true
false || false -> falso
false || true -> true

*/

var ex1 = true && true; // true
var ex2 = (2 == 2) && (3 >= 6); // false
var ex3 = (2>3) || (17 <= 40); // true
var ex4 = false || false; // false

function condicionalAvanzado ( paraComparar ) {
	if (paraComparar) {
		console.log("Verdadero!");
	} else {
		console.log("falso!");
	};
};


/* --Interación Básica con el Usuario-- */

// alert() -> Una ventana con un aviso 
alert("¡Bienvenido a esta web!");

// confirm () -> botones.
confirm("¿Esta seguro que desea abandonar esta web?");

// prompt() -> Además de los botones... el usuario puede introduccir datos.
prompt("¿Como te llamas?");

// Registremos los datos en una variable.
var nombre = prompt("¿Como te llamas?");


/* --ARRAYS-- */

var arreglo = [];

arreglo = [1, "platano", "piscina", "manzana", true];

// Usando el Índice
arreglo[1]; 

// Cambiar un valor del Índice
arreglo[0] = "fresa";
arreglo[4] = "pera";
arreglo[2] = "limón";

// Índice total
arreglo.length;

// .push() - Añadir elemento al índice
arreglo.push("nuevo");

// .pop() - Eliminar el último elemento del índice
arreglo.pop();

// .shift() - Eliminar el primer elemento
arreglo.shift();

// delete
delete arreglo[0];

// Elementos vacios
arreglo[0] = undefined;

// .splice()  - Borrar
var manzana = arreglo.splice(3, 1);


// .map()
var arreglo = ["platano", "fresa", "lima", "manzana"];
var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
console.log(resultado);

// Arreglos avanzados
var arreglo1 = ["platano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];

var juntandoArreglos = [arreglo1, arreglo2];

function testArreglos () {
	console.log(juntandoArreglos[0][0]);
	console.log(juntandoArreglos[1][3]);
};

/*= EJERCICIOS =*/

// Nº 7
// #simplifiquemos! Quiero solo un bucle para todo.
var trenesOperativos = 8;
var totalTrenes = 12;

function estadoDetalle () {
	for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
		if (numeroTren <= trenesOperativos) {
			console.log("El tren numero "+numeroTren+" esta funcionando");
		}else {
			console.log("El tren numero "+numeroTren+" esta parado");
		};		
	};
};

// Nº 8
/* #compliquemos! Servicio nocturno en el tren 10.
Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del
tren 10 se especificque que es nocturno. Independientemente de si esta parado o funcionando.
*/

var trenesOperativos = 8;
var totalTrenes = 12;

function estadoDetalle () {
	for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
		if ((numeroTren <= trenesOperativos) && (numeroTren != 10)) {
			console.log("El tren numero "+numeroTren+" esta funcionando");
		} else if (numeroTren == 10){
			console.log("IMPORTANTE: El tren numero "+numeroTren+" es nocturno");
		} else {
			console.log("El tren numero "+numeroTren+" esta parado");
		};		
	};
};

// Nº 9
// Refactoricemos - ¿y si todos estan en las vías o ninguno?.
var trenesOperativos = 8;
var totalTrenes = 12;

function estadoDetalle () {
	if (trenesOperativos > 0) {
		if(trenesOperativos == totalTrenes){
			console.log("Todos los trenes estan funcionando");
		} else {
			for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
				if (numeroTren <= trenesOperativos) {
					console.log("El tren numero "+numeroTren+" esta funcionando");
				} else if (numeroTren == 10){
					console.log("IMPORTANTE: El tren numero "+numeroTren+" es nocturno");
				} else {
					console.log("El tren numero "+numeroTren+" esta parado");
				};		
			};
		};
	} else {
		console.log("IMPORTANTE: Ningún tren esta funcionando");
	};
};

// Nº 10
/* 
El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo. 
El 12 será destinado a curbrir esta necesidad, exactamente igual que el 10 anteriormente.
*/

var trenesOperativos = 8;
var totalTrenes = 12;

function estadoDetalle () {
	if (trenesOperativos > 0) {
		if(trenesOperativos == totalTrenes){
			console.log("Todos los trenes estan funcionando");
		} else {
			for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
				if ((numeroTren <= trenesOperativos) && (numeroTren != 10) && (numeroTren != 12)) {
					console.log("El tren numero "+numeroTren+" esta funcionando");
				} else if (numeroTren == 10 || numeroTren == 12){
					console.log("IMPORTANTE: El tren numero "+numeroTren+" es nocturno");
				} else {
					console.log("El tren numero "+numeroTren+" esta parado");
				};		
			};
		};
	} else {
		console.log("IMPORTANTE: Ningún tren esta funcionando");
	};
};


// Nº 11
/* El departamento de Marketing ha decidido lanzar un nuevo servicio los sabados.
 El "tren fiestero" será un tren adaptado a un público más intrepido y 
funcionará solo en los sabados. Este tren será el número 3.
NOTA: EL TREN TRES SOLO FUNCIONA LOS SABADOS. 
Es necesario incluir el día de la semana en tu código
*/

var trenesOperativos = 8;
var totalTrenes = 12;
var diaSemana = "Sabado";

//OP.1
function estadoDetalle () {
	if (trenesOperativos > 0) {
		if(trenesOperativos == totalTrenes){
			console.log("Todos los trenes estan funcionando");
		} else {
			for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
				if (numeroTren <= trenesOperativos  && numeroTren != 3) {
					console.log("El tren numero "+numeroTren+" esta funcionando");
				} else if (numeroTren == 10 || numeroTren == 12){
					console.log("IMPORTANTE: El tren numero "+numeroTren+" es nocturno");
				} else if (numeroTren == 3 && diaSemana == "Sabado"){
					console.log("El tren fiestero("+numeroTren+") esta funcionando.")
				} else {
					console.log("El tren numero "+numeroTren+" esta parado");
				};		
			};
		};
	} else {
		console.log("IMPORTANTE: Ningún tren esta funcionando");
	};
};

//OP.2
function estadoDetalle () {
	if (trenesOperativos > 0) {
		if(trenesOperativos == totalTrenes){
			console.log("Todos los trenes estan funcionando");
		} else {
			for(var numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
				if (numeroTren <= trenesOperativos  && numeroTren != 3 && numeroTren != 10 && numeroTren != 12) {
					console.log("El tren numero "+numeroTren+" esta funcionando");
				} else if (numeroTren == 10 || numeroTren == 12){
					console.log("IMPORTANTE: El tren numero "+numeroTren+" es nocturno");
				} else if (numeroTren == 3 && diaSemana == "Sabado"){
					console.log("El tren fiestero("+numeroTren+") esta funcionando.")
				} else if (numeroTren == 3 && diaSemana != "Sabado"){
					console.log("El tren fiestero("+numeroTren+") funcionará el sabado.")	
				} else {
					console.log("El tren numero "+numeroTren+" esta parado");
				};		
			};
		};
	} else {
		console.log("IMPORTANTE: Ningún tren esta funcionando");
	};
};