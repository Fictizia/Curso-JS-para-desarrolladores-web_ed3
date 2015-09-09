/*== Clase 2 ==*/

/* TEORÍA */

//NaN
console.log(0/0);

//Infinity
console.log(100/0);

//.toFixed()
var numero = 1.3453456467;
console.log(numero.toFixed(3));

/* --Do...while--
do{
   -Ejecutamos este código-
} while (-Algo verdadero-);
Documentación:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
http://www.w3schools.com/js/js_loop_while.asp
*/

var i = 0; // o i = 100;
do {
   i += 1;
   console.log(i);
} while (i < 5);


// Comparadores

var mayorQue = 100 > 10;
var menorQue = 10 < 100;
var mayorIgual = 100 >= 10;
var menorIgual = 10 <= 100;
var igual = 10 == 10;
var igualTotalmente = 10 === 10; // Igualdad en valor y tipo
var noIgual = 100 != 10;

function comparar (dato) {
	console.log(dato);
};

// Strings

var yoVeo = "Yo soy de las personas que ven";
var vasoLleno = "vaso medio lleno";
var vasoVacio = "vaso medio vacio";


// Concatenando (Uniendo Cadenas)
var frasePositiva = yoVeo + " el " + vasoLleno;
var fraseNegativa = yoVeo + " el " + vasoVacio;


function imprimir ( texto) {
	console.log( texto );
};

// Imprimir con estilo por consola
function imprimirBonito (texto) {
	console.log (guiones);
	console.log (texto);
	console.log (iguales);
};

var guiones = "---------------------"
var iguales = "====================="


/* Caracteres especiales

\t -> Tabulador
\' -> Comillas Simples
\" -> Comillas Dobles
\\ -> \
\n -> Salto de línea 

Documentación:
https://msdn.microsoft.com/es-es/library/2yfce773(v=vs.94).aspx

*/

function caracteresDemo () {
console.log("Hasta aqui... todo correcto. Ahora vamos a \"tabular\":\tves? Ya estamos más lejos.\n\'Otra linea ;-)\'")
};



/* Manejo de cadenas */

// .lenght
var amigo = "un amigo";
var amigos = "un amigo, dos amigos, tres amigos...";

function comparadorCadenas (cadena1, cadena2){
	console.log((cadena1.length>cadena2.length)+", "+cadena1+" no es mayor que "+cadena2);
};

// .concat()
var amigo = "un amigo";
var amigos = amigo.concat(", dos amigos, tres amigos...");

// .toLowerCase()
var amigo = "UN Amigo";
var amigos = amigo.toLowerCase().concat(", dos amigos, tres amigos...");


// .charAt()
function dimeCaracter ( variable, numero){
	console.log(variable.charAt(numero));
};


// .indexOf()
var amigo = "un amigo";
var amigos = "un amigo, dos amigos, tres amigos...";

function localizaCaracter ( variable, caracter){
	console.log(variable.indexOf(caracter));
};

// .substring(inicio, final*)
var amigo = "un amigo";
var amigos = "un amigo, dos amigos, tres amigos...";

var dosAmigos = amigos.substring(10, 20);
var tresAmigos = amigos.substring(22);


// Jugando con variables

var empezoComo3 = 3;
era3();

empezoComo3 = 35;
era3();

empezoComo3 = empezoComo3 + 30;
era3();

empezoComo3 += 4;
era3();

empezoComo3++;
era3();

empezoComo3 -= 12;
era3();

empezoComo3--;
era3();

empezoComo3 *= 10;
era3();

empezoComo3 /= 11;
era3();

empezoComo3 += "texto";
era3();

empezoComo3 += 20;
era3();

empezoComo3++;
era3();


function era3 () {
	console.log("empezoComo3 debaría ser 3, ahora su valor es " + empezoComo3);
};



/*= EJERCICIOS =*/

// Nº 5
// ¿y los trenes parados?.

var trenesOperativos = 8;
var totalTrenes = 12;

function trenesParados(){
	for(var numeroTren = trenesOperativos + 1; numeroTren <= totalTrenes; numeroTren++){
		console.log("El tren numero "+numeroTren+" esta parado");
	};
};


// Nº 6 
// Refactoricemos y juntemos bucles dentro de una misma función.

var trenesOperativos = 8;
var totalTrenes = 12;

function estadoDetalle () {
	var numeroTren = 1;
	while (numeroTren <= trenesOperativos) {
		console.log("El tren numero "+numeroTren+" esta funcionando");
		numeroTren++;
	};
	for(var trenParado = trenesOperativos + 1; trenParado <= totalTrenes; trenParado++) {
		console.log("El tren numero "+trenParado+" esta parado");
	};
};