/*== Clase 5 ==*/

// Nº 18
/* 
   Una de las vias principales esta en obras.
   Asi que nuestra compañia decidió usar antiguas lineas para hacer trasbordos entre las estaciones afectadas.
   Nuestra Misión es añadir el tiempo estimado en los billetes para las zonas afectadas Tetuán(12), 
   Moncloa(19) y Hortaleza(32). Por supuesto un texto informativo y el nombre del usuario.
   
   Nota: Intenta utilizar constructores
   
   Info: 	Tetuán - 12
   			Moncloa - 19
   			Hortaleza - 21
   
*/

var nuevasRutas = [ ["Tetuán", 12], ["Moncloa", 19], ["Hortaleza", 21] ];

function constructorDeTickets (estacion, tiempo) {
	return function (nombre) {
		console.log("Sr/a. "+nombre+".\n Muchas gracias por adquirir este ticket gratuito en el "+estacion+" express.\n El tiempo estiamdo de llegada es de "+tiempo+" minutos.\n Estamos trabajando en la mejora de nuestra via principal, disculpe las molestias!");
	};
}

var tetuanExpress = constructorDeTickets ("Tetuán", 12);
var moncloaExpress = constructorDeTickets (nuevasRutas[1][0], nuevasRutas[1][1]);
var hortalezaExpress = constructorDeTickets (nuevasRutas[2][0], nuevasRutas[2][1]);

/*
    tetuanExpress ("Pepe")
    moncloaExpres ("Luis")
    hortalezaExpress ("Hector")
*/