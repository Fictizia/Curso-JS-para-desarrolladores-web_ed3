/*== Clase 6 ==*/

/*= TEORÍA =*/

//-- CALLBACKS --
//OP. 1
function principal (primerPaso, segundoPaso, ultimoPaso){
    console.log("Llamemos al primer paso....");
    primerPaso('paso 1 - terminado');

    console.log("Llamemos al segundo paso....");
    segundoPaso('paso 2 - terminado');

    console.log("Llamemos al último paso....");
    ultimoPaso('Último paso - terminado');
}

function paso1(texto){
     console.log(texto);
}

function paso2(texto){
     console.log(texto);
}

function termino(texto){
     console.log(texto);
}

principal(paso1, paso2, termino);


// OP.2
function principal (primerPaso, segundoPaso, ultimoPaso){
    console.log("Llamemos al primer paso....");
    primerPaso('paso 1 - terminado');

    console.log("Llamemos al segundo paso....");
    segundoPaso('paso 2 - terminado');

    console.log("Llamemos al último paso....");
    ultimoPaso('Último paso - terminado');
}

principal(function paso1(texto){
     console.log(texto);
},

function paso2(texto){
     console.log(texto);
},

function termino(texto){
     console.log(texto);
});

/*= EJERCICIOS TRENES =*/

// Nº 19
/* 
	Necesitamos saber cuantos pasajeros estan utilizando las nuevas rutas y 
	con esto crear un numero de billete único estructurado.
	
	Nota: El formato del número de billete deseado: 
	(Inicial de la estación)(número de viajero) -> H1, T120, M110, etc... 
*/


var nuevasRutas = [ ["Tetuán", 12], ["Moncloa", 19], ["Hortaleza", 21] ];

function constructorDeTickets (estacion, tiempo) {
	var numeroPasajero = 0;
	return function (nombre) {
		numeroPasajero++;
		console.log("Sr/a. "+nombre+".\n Muchas gracias por adquirir este ticket gratuito en el "+estacion+" express.\n Billete Número:\t"+(estacion.charAt(0)+numeroPasajero)+"\n El tiempo estiamdo de llegada es de "+tiempo+" minutos.\n  Estamos trabajando en la mejora de nuestra via principal, disculpe las molestias!");
	};
}

var tetuanExpress = constructorDeTickets ("Tetuán", 12);
var moncloaExpress = constructorDeTickets (nuevasRutas[1][0], nuevasRutas[1][1]);
var hortalezaExpress = constructorDeTickets (nuevasRutas[2][0], nuevasRutas[2][1]);



// Nº 20
/* 
	Gracias al ejercicio anterior, hemos podido saber a groso modo 
	cuantos pasajeros van en cada tren. 
	
	Ahora con esos datos, sabemos que podemos usar trenes más compactos 
	que nos permitirán transportar a los pasajeros en menos tiempo.
	
	Pero existe el riesgo de dejar pasajeros esperando mucho tiempo.
	
	Así que haremos una nueva función que avise al revisor cuando 
	no quede sitio en el próximo tren. 
	
	El revisor del tren debe repartir tickets restaurante para poder 
	tomar una consumición gratis en la cafetería de la estación, 
	si el pasajero no tiene sitio en el proximo tren.
	
	Nota: Recuerda que la linea es única y el mismo tren cubre todo el trayecto.
*/

function capacidad (ultimoPasajero, numeroMaximo) {
	
	function sinSitios () {
		console.log("IMPORTANTE: No queda sitio, por favor... saca los tickets restaurante!")
		console.log ("Capacidad:\t"+ultimoPasajero+"/"+numeroMaximo);
	};
	function quedaSitio () {
		console.log ("Capacidad:\t"+ultimoPasajero+"/"+numeroMaximo);
	};

	if (ultimoPasajero >= numeroMaximo){
		sinSitios();
	} else {
		quedaSitio();
	};

};



/*= EJERCICIOS REPASO =*/

// -- Definir un objeto
var cajeroAutomatico = {};

// -- Añadiendo detalles

var clientesBD = ["Alicia Gutierrez", "Alfonso Gómez", "Luis Navarro", "Oscar García", "Andres Fernandez", "Lucia Mellado"];

var cajeroAutomatico = {
    empresaPropietaria: "SuperExpress",
    modelo: "Al-201",
    año: 2010,
    serie: "01 Beta",
    tipo: "Prototipo",
    unidadMedida: "metros",
    alto: 1,
    ancho: 0.5,
    largo: 0.5,
    unidadPeso: "Kg",
    peso: 600,
    materiales: ["acero", "plastico", "cables", "circuitos"],
    clientesAutorizados: clientesBD,
    moneda: "Euros",
    dineroDisponible: 65000
};

// -- Añadiendo más detalles

cajeroAutomatico.volumen = cajeroAutomatico.alto * cajeroAutomatico.ancho * cajeroAutomatico.largo;
cajeroAutomatico.volumenMedida = cajeroAutomatico.unidadMedida.charAt(0) +3;

console.log("El volumen del cajero automático es de "+cajeroAutomatico.volumen+cajeroAutomatico.volumenMedida);


// -- Añadiendo y quitando clientes
function sumarClientes (nombre, lista) {
lista.push(nombre); 
}

function quitarCliente(nombre, lista) {
	if (lista.length === 0) {
		console.log("La lista esta vacia.");
	} else {
		for (var i = 0; i < lista.length; i++) {
			if(lista[i] == nombre){
				lista.splice(i, 1);
				console.log("El Cliente \""+nombre+"\" eliminado con exito!");
				return lista;
			} else if (i == lista.length -1){
				console.log("El cliente \""+nombre+"\" no encontrado!");
			}
		}
	}
}



// -- Usando corchetes
cajeroAutomatico["operaciones realizadas"] = 0;
console.info("Por el momento las operaciones realizadas son "+cajeroAutomatico["operaciones realizadas"]);



// -- Borrando información 
function borrandoDatosVacios (objeto, propiedad, valorMinimo) {
    if (objeto[propiedad] <= valorMinimo) {
        delete objeto[propiedad]
        return true
    } else {
        return false
    }
} 

// -- Operaciones Economicas (Administrador)
var debugMode = true;

function esNumero(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function operacionRealizada () {
    if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
        cajeroAutomatico["operaciones realizadas"] = 1;
        if(debugMode){
            console.info("Primera operacion realizada con exito!");
        }
    } else {
        cajeroAutomatico["operaciones realizadas"]++;
        if(debugMode){
            console.info("La operacion #"+cajeroAutomatico["operaciones realizadas"]+" realizada con exito!");
        }        
    }  
};

function operacionFallida () {
    if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
        cajeroAutomatico["operaciones fallidas"] = 1;
        if(debugMode){
            console.warn("ERROR: Primera operacion fallida!");
        }
    } else {
        cajeroAutomatico["operaciones fallidas"]++;
        if(debugMode){
            console.warn("ERROR: La operacion #"+cajeroAutomatico["operaciones fallidas"]+" fallo!");
        }        
    }  
};


function agregarDinero (cantidad){
    if (esNumero(cantidad)) {
        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
        operacionRealizada();
        if(debugMode){
            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
        }
    } else {
        operacionFallida();
        if(debugMode){
            console.warn(cantidad+" No es un numero valido!");
        }
    }
    
}

function quitarDinero (cantidad){
    if (esNumero(cantidad)) {
        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
        operacionRealizada();
        if(debugMode){
            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
        }
    } else {
        operacionFallida();
        if(debugMode){
            console.warn(cantidad+" No es un numero valido!");
        }
    }
}


// -- Operaciones Economicas (Clientes)

function retirarEfectivo (nombre, cantidad) {
    if (esCliente(nombre)){
        if (esNumero(cantidad)) {
            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
            operacionRealizada();
            if(debugMode){
                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
            }
        } else {
            operacionFallida();
            if(debugMode){
                console.warn(cantidad+" No es un numero valido!");
            }
        }
    } else {
            operacionFallida();
            if(debugMode){
                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
            }        
    }    
        
}

function ingresarEfectivo (nombre, cantidad) {
    if (esCliente(nombre)){
        if (esNumero(cantidad)) {
            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
            operacionRealizada();
            if(debugMode){
                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
            }
        } else {
            operacionFallida();
            if(debugMode){
                console.warn(cantidad+" No es un numero valido!");
            }
        }
    } else {
            operacionFallida();
            if(debugMode){
                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
            }        
    }    
        
}


function esCliente(nombre) {
	if (cajeroAutomatico.clientesAutorizados === 0) {
	    if (debugMode) {
		    console.warn("La lista esta vacia.");
	    }
	    return false;
	} else {
		for (var i = 0; i < cajeroAutomatico.clientesAutorizados.length; i++) {
			if(cajeroAutomatico.clientesAutorizados[i] == nombre){
				cajeroAutomatico.clientesAutorizados.splice(i, 1);
				if (debugMode) {
		            console.info(nombre+" eres cliente de "+cajeroAutomatico.empresaPropietaria);
				}
				return true;
			} else if (i == cajeroAutomatico.clientesAutorizados.length -1){
				if (debugMode) {
		            console.warn(nombre+" no encontrado!");
				}
				return false;
			}
		}
	}
}



// -- Creamos un log detallado y una cuenta total

'use strict';
/* VARIABLES */
var debugMode = true;

var clientesBD = ["Alicia Gutierrez", "Alfonso Gómez", "Luis Navarro", "Oscar García", "Andres Fernandez", "Lucia Mellado"];

var cajeroAutomatico = {
    empresaPropietaria: "SuperExpress",
    modelo: "Al-201",
    año: 2010,
    serie: "01 Beta",
    tipo: "Prototipo",
    unidadMedida: "metros",
    alto: 1,
    ancho: 0.5,
    largo: 0.5,
    unidadPeso: "Kg",
    peso: 600,
    materiales: ["acero", "plastico", "cables", "circuitos"],
    clientesAutorizados: clientesBD,
    moneda: "Euros",
    dineroDisponible: 65000
};

cajeroAutomatico.volumen = cajeroAutomatico.alto * cajeroAutomatico.ancho * cajeroAutomatico.largo;
cajeroAutomatico.volumenMedida = cajeroAutomatico.unidadMedida.charAt(0) +3;

/* FUNCIONES VERIFICACIÓN */

/**
 * Añade informacion sobre todo lo que ocurre en cajeroAutomatico.log.(logNUMERO).
 * Actualiza cajeroAutomatico.logTotal con operaciones fallidas y operaciones realizadas.
 * @param {string} tipo - "info" o "error".
 * @param {string} origen - "usuario", "maquina" o "administrador".
 * @param {string} codigo - código de error
 * @param {string} detalles - Descripción del error.
 */
function dataLog (tipo, origen, codigo, detalles) {
    cajeroAutomatico["operaciones fallidas"] = cajeroAutomatico["operaciones fallidas"] || 0;
    cajeroAutomatico["operaciones realizadas"] = cajeroAutomatico["operaciones realizadas"] || 0;
    cajeroAutomatico.logTotal = cajeroAutomatico.logTotal || 1;
    cajeroAutomatico.log = cajeroAutomatico.log || [];
    cajeroAutomatico.logTotal = cajeroAutomatico["operaciones fallidas"] + cajeroAutomatico["operaciones realizadas"];
    cajeroAutomatico.log[cajeroAutomatico.logTotal] = [cajeroAutomatico.logTotal, tipo, origen, codigo, detalles ]
    
}


function esCliente(nombre) {
	if (cajeroAutomatico.clientesAutorizados === 0) {
	    if (debugMode) {
		    console.warn("La lista esta vacia.");
	    }
	    return false;
	} else {
		for (var i = 0; i < cajeroAutomatico.clientesAutorizados.length; i++) {
			if(cajeroAutomatico.clientesAutorizados[i] == nombre){
				if (debugMode) {
		            console.info(nombre+" eres cliente de "+cajeroAutomatico.empresaPropietaria);
				}
				return true;
			} else if (i == cajeroAutomatico.clientesAutorizados.length -1){
				if (debugMode) {
		            console.warn(nombre+" no encontrado!");
				}
				return false;
			}
		}
	}
}

function esNumero(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function operacionRealizada () {
    if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
        cajeroAutomatico["operaciones realizadas"] = 1;
        if(debugMode){
            console.info("Primera operacion realizada con exito!");
        }
    } else {
        cajeroAutomatico["operaciones realizadas"]++;
        if(debugMode){
            console.info("La operacion #"+cajeroAutomatico["operaciones realizadas"]+" realizada con exito!");
        }        
    }  
}

function operacionFallida () {
    if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
        cajeroAutomatico["operaciones fallidas"] = 1;
        if(debugMode){
            console.warn("ERROR: Primera operacion fallida!");
        }
    } else {
        cajeroAutomatico["operaciones fallidas"]++;
        if(debugMode){
            console.warn("ERROR: La operacion #"+cajeroAutomatico["operaciones fallidas"]+" fallo!");
        }        
    }  
}

function borrandoDatosVacios (objeto, propiedad, valorMinimo) {
    if (objeto[propiedad] <= valorMinimo) {
        delete objeto[propiedad];
        return true;
    } else {
        return false;
    }
}


/* FUNCIONES INTERACCIÓN */

function retirarEfectivo (nombre, cantidad) {
    if (esCliente(nombre)){
        if (esNumero(cantidad)) {
            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
            operacionRealizada();
            dataLog ("info", "usuario", 1, "Retirada de "+cantidad+cajeroAutomatico.moneda+" por "+nombre);
            if(debugMode){
                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
            }
            return true;
        } else {
            operacionFallida();
            dataLog ("error", "usuario", 2, "Retirada fallida por "+cantidad+" erronea. Usuario: "+nombre);
            if(debugMode){
                console.warn(cantidad+" No es un numero valido!");
            }
            return false;
        }
    } else {
            operacionFallida();
            dataLog ("error", "usuario", 3, nombre+" No es cliente");
            if(debugMode){
                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
            }
            return false;
    }    
        
}

function ingresarEfectivo (nombre, cantidad) {
    if (esCliente(nombre)){
        if (esNumero(cantidad)) {
            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
            operacionRealizada();
            dataLog ("info", "usuario", 4, "Ingreso de "+cantidad+cajeroAutomatico.moneda+" por "+nombre);
            if(debugMode){
                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
            }
            return true;
        } else {
            operacionFallida();
            dataLog ("error", "usuario", 5, "Ingreso fallido por "+cantidad+" - erronea. Usuario: "+nombre);
            if(debugMode){
                console.warn(cantidad+" No es un numero valido!");
            }
            return false;
        }
    } else {
            operacionFallida();
            dataLog ("error", "usuario", 6, nombre+" No es cliente");
            if(debugMode){
                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
            }
            return false;
    }    
        
}

function agregarDinero (cantidad){
    if (esNumero(cantidad)) {
        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
        operacionRealizada();
        dataLog ("info", "administrador", 7, "Ingreso de "+cantidad+cajeroAutomatico.moneda);
        if(debugMode){
            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
        }
        return true;
    } else {
        operacionFallida();
        dataLog ("error", "administrador", 8, "Ingreso fallido por "+cantidad+" - erronea.");
        if(debugMode){
            console.warn(cantidad+" No es un numero valido!");
        }
        return false;
    }
    
}

function quitarDinero (cantidad){
    if (esNumero(cantidad)) {
        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
        operacionRealizada();
        dataLog ("info", "administrador", 9, "Retirada de "+cantidad+cajeroAutomatico.moneda);
        if(debugMode){
            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
        }
        return true;
    } else {
        operacionFallida();
        dataLog ("error", "administrador", 10, "Retirada fallida por "+cantidad+" - erronea.");
        if(debugMode){
            console.warn(cantidad+" No es un numero valido!");
        }
        return false;
    }
}

function agregarCliente (nombre, lista) {
    lista.push(nombre);
    operacionRealizada();
    dataLog ("info", "administrador", 11, "Ingreso de "+nombre+" a la base de datos de clientes");
    return true;
}

function quitarCliente(nombre, lista) {
	if (lista.length === 0) {
	    if (debugMode) {
		    console.log("La lista esta vacia.");
	    }
		operacionFallida();
		dataLog ("error", "maquina", 12, "Eliminacion de "+nombre+" fallida. Base de datos, vacia.");
		return false;
	} else {
		for (var i = 0; i < lista.length; i++) {
			if(lista[i] == nombre){
				lista.splice(i, 1);
				if(debugMode) {
				    console.log("El Cliente \""+nombre+"\" eliminado con exito!");
				    console.log(lista);
				}
				operacionRealizada();
                dataLog ("info", "administrador", 13, "Eliminado "+nombre+" de la base de datos de clientes");
				return true;
			} else if (i == lista.length -1){
			    if(debugMode) {
				    console.log("El cliente \""+nombre+"\" no encontrado!");
			    }
				operacionFallida();
		        dataLog ("error", "maquina", 14, "Eliminacion de "+nombre+" fallida. Cliente inexistente.");
			    return false;
			}
		}
	}
}


// -- Refactorizamos y dejamos todo preparado para incluirlo en nuestro html.
var myApp = myApp || {};

myApp = (function (w){
	'use strict';
/* VARIABLES */
var debugMode = true;

var clientesBD = ["Alicia Gutierrez", "Alfonso Gómez", "Luis Navarro", "Oscar García", "Andres Fernandez", "Lucia Mellado"];

var cajeroAutomatico = {
    empresaPropietaria: "SuperExpress",
    modelo: "Al-201",
    "año": 2010,
    serie: "01 Beta",
    tipo: "Prototipo",
    unidadMedida: "metros",
    alto: 1,
    ancho: 0.5,
    largo: 0.5,
    unidadPeso: "Kg",
    peso: 600,
    materiales: ["acero", "plastico", "cables", "circuitos"],
    clientesAutorizados: clientesBD,
    moneda: "Euros",
    dineroDisponible: 65000
};

cajeroAutomatico.volumen = cajeroAutomatico.alto * cajeroAutomatico.ancho * cajeroAutomatico.largo;
cajeroAutomatico.volumenMedida = cajeroAutomatico.unidadMedida.charAt(0) +3;

/* FUNCIONES VERIFICACIÓN */

/**
 * Añade informacion sobre todo lo que ocurre en cajeroAutomatico.log.(logNUMERO).
 * Actualiza cajeroAutomatico.logTotal con operaciones fallidas y operaciones realizadas.
 * @param {string} tipo - "info" o "error".
 * @param {string} origen - "usuario", "maquina" o "administrador".
 * @param {string} codigo - código de error
 * @param {string} detalles - Descripción del error.
 */
function dataLog (tipo, origen, codigo, detalles) {
    cajeroAutomatico["operaciones fallidas"] = cajeroAutomatico["operaciones fallidas"] || 0;
    cajeroAutomatico["operaciones realizadas"] = cajeroAutomatico["operaciones realizadas"] || 0;
    cajeroAutomatico.logTotal = cajeroAutomatico.logTotal || 1;
    cajeroAutomatico.log = cajeroAutomatico.log || [];
    cajeroAutomatico.logTotal = cajeroAutomatico["operaciones fallidas"] + cajeroAutomatico["operaciones realizadas"];
    cajeroAutomatico.log[cajeroAutomatico.logTotal] = [cajeroAutomatico.logTotal, tipo, origen, codigo, detalles ];
    
}


function esCliente(nombre) {
	if (cajeroAutomatico.clientesAutorizados === 0) {
	    if (debugMode) {
		    console.warn("La lista esta vacia.");
	    }
	    return false;
	} else {
		for (var i = 0; i < cajeroAutomatico.clientesAutorizados.length; i++) {
			if(cajeroAutomatico.clientesAutorizados[i] == nombre){
				if (debugMode) {
		            console.info(nombre+" eres cliente de "+cajeroAutomatico.empresaPropietaria);
				}
				return true;
			} else if (i == cajeroAutomatico.clientesAutorizados.length -1){
				if (debugMode) {
		            console.warn(nombre+" no encontrado!");
				}
				return false;
			}
		}
	}
}

function esNumero(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function operacionRealizada () {
    if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
        cajeroAutomatico["operaciones realizadas"] = 1;
        if(debugMode){
            console.info("Primera operacion realizada con exito!");
        }
    } else {
        cajeroAutomatico["operaciones realizadas"]++;
        if(debugMode){
            console.info("La operacion #"+cajeroAutomatico["operaciones realizadas"]+" realizada con exito!");
        }        
    }  
}

function operacionFallida () {
    if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
        cajeroAutomatico["operaciones fallidas"] = 1;
        if(debugMode){
            console.warn("ERROR: Primera operacion fallida!");
        }
    } else {
        cajeroAutomatico["operaciones fallidas"]++;
        if(debugMode){
            console.warn("ERROR: La operacion #"+cajeroAutomatico["operaciones fallidas"]+" fallo!");
        }        
    }  
}

function borrandoDatosVacios (objeto, propiedad, valorMinimo) {
    if (objeto[propiedad] <= valorMinimo) {
        delete objeto[propiedad];
        return true;
    } else {
        return false;
    }
}


/* FUNCIONES INTERACCIÓN */

function retirarEfectivo (nombre, cantidad) {
    if (esCliente(nombre)){
        if (esNumero(cantidad)) {
            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
            operacionRealizada();
            dataLog ("info", "usuario", 1, "Retirada de "+cantidad+cajeroAutomatico.moneda+" por "+nombre);
            if(debugMode){
                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
            }
            return true;
        } else {
            operacionFallida();
            dataLog ("error", "usuario", 2, "Retirada fallida por "+cantidad+" erronea. Usuario: "+nombre);
            if(debugMode){
                console.warn(cantidad+" No es un numero valido!");
            }
            return false;
        }
    } else {
            operacionFallida();
            dataLog ("error", "usuario", 3, nombre+" No es cliente");
            if(debugMode){
                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
            }
            return false;
    }    
        
}

function ingresarEfectivo (nombre, cantidad) {
    if (esCliente(nombre)){
        if (esNumero(cantidad)) {
            cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
            operacionRealizada();
            dataLog ("info", "usuario", 4, "Ingreso de "+cantidad+cajeroAutomatico.moneda+" por "+nombre);
            if(debugMode){
                console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
            }
            return true;
        } else {
            operacionFallida();
            dataLog ("error", "usuario", 5, "Ingreso fallido por "+cantidad+" - erronea. Usuario: "+nombre);
            if(debugMode){
                console.warn(cantidad+" No es un numero valido!");
            }
            return false;
        }
    } else {
            operacionFallida();
            dataLog ("error", "usuario", 6, nombre+" No es cliente");
            if(debugMode){
                console.warn(nombre+" No eres un cliente de "+cajeroAutomatico.empresaPropietaria+"!");
            }
            return false;
    }    
        
}

function agregarDinero (cantidad){
    if (esNumero(cantidad)) {
        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
        operacionRealizada();
        dataLog ("info", "administrador", 7, "Ingreso de "+cantidad+cajeroAutomatico.moneda);
        if(debugMode){
            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
        }
        return true;
    } else {
        operacionFallida();
        dataLog ("error", "administrador", 8, "Ingreso fallido por "+cantidad+" - erronea.");
        if(debugMode){
            console.warn(cantidad+" No es un numero valido!");
        }
        return false;
    }
    
}

function quitarDinero (cantidad){
    if (esNumero(cantidad)) {
        cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
        operacionRealizada();
        dataLog ("info", "administrador", 9, "Retirada de "+cantidad+cajeroAutomatico.moneda);
        if(debugMode){
            console.info("Dinero disponible en el cajero, "+cajeroAutomatico.dineroDisponible);
        }
        return true;
    } else {
        operacionFallida();
        dataLog ("error", "administrador", 10, "Retirada fallida por "+cantidad+" - erronea.");
        if(debugMode){
            console.warn(cantidad+" No es un numero valido!");
        }
        return false;
    }
}

function agregarCliente (nombre, lista) {
lista.push(nombre);
operacionRealizada();
dataLog ("info", "administrador", 11, "Ingreso de "+nombre+" a la base de datos de clientes");
return true;
}

function quitarCliente(nombre, lista) {
	if (lista.length === 0) {
	    if (debugMode) {
		    console.log("La lista esta vacia.");
	    }
		operacionFallida();
		dataLog ("error", "maquina", 12, "Eliminacion de "+nombre+" fallida. Base de datos, vacia.");
		return false;
	} else {
		for (var i = 0; i < lista.length; i++) {
			if(lista[i] == nombre){
				lista.splice(i, 1);
				if(debugMode) {
				    console.log("El Cliente \""+nombre+"\" eliminado con exito!");
				    console.log(lista);
				}
				operacionRealizada();
                dataLog ("info", "administrador", 13, "Eliminado "+nombre+" de la base de datos de clientes");
				return true;
			} else if (i == lista.length -1){
			    if(debugMode) {
				    console.log("El cliente \""+nombre+"\" no encontrado!");
			    }
				operacionFallida();
		        dataLog ("error", "maquina", 14, "Eliminacion de "+nombre+" fallida. Cliente inexistente.");
			    return false;
			}
		}
	}
}
	return {
	    cajeroAutomatico: "Esto es todo lo que te muestro."
	};
})(window);