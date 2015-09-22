/*== Clase 7 ==*/

/*= TEORÍA =*/


/*
[Objeto = Prototípo]{
    [ Propiedad = Variable ]
    [ Método = Funcion ]
}
*/

// Constructor de Objetos
var coche = function (parametros) {
    /* Codigo*/
};


// Propiedades del Objeto
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad
    this.color = color;
    this.tipo = tipo;
};



// Data-typing 
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    if (isNaN(this.antiguedad)) {
        console.log("Error en el data-typing, antiguedad no es un número");
    }
};

var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
console.log("Tu coche es un "+miCoche.marca+" "+miCoche.modelo+" con "+miCoche.antiguedad+" años, clase "+miCoche.tipo+" y color "+miCoche.color);



// Métodos (En el Constructor)
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    if (isNaN(this.antiguedad)) {
        console.log("Error en el data-typing, antiguedad no es un número");
    }
    this.detalles = function(){
      console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
    }
};

var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();



// Métodos (Extensión del prototipo)
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    if (isNaN(this.antiguedad)) {
        console.log("Error en el data-typing, antiguedad no es un número");
    }
};

coche.prototype.detalles = function(){
  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
}

var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();


// Métodos (Vinculación Externa)
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    if (isNaN(this.antiguedad)) {
        console.log("Error en el data-typing, antiguedad no es un número");
    }
    this.detalles = dameDetalles;
};

function dameDetalles(){
  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
}

var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
miCoche.detalles();


// Herencia
var coche = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
    if (isNaN(this.antiguedad)) {
        console.log("Error en el data-typing, antiguedad no es un número");
    }
    this.detalles = dameDetalles;
};

var furgon = function (taraMinima, cargaUtil, volumenCarga) {
    this.taraMinima = taraMinima;
    this.cargaUtil = cargaUtil;
    this.volumenCarga = volumenCarga;
    if (isNaN(this.taraMinima) || isNaN(this.cargaUtil) || isNaN(this.volumenCarga)) {
        console.log("Error en los datos. Por favor usar solo valores numéricos.");
    }
    this.detallesTecnicos = detallesTecnicos;
};


function dameDetalles(){
  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
}

function detallesTecnicos(){
  console.warn("Tu coche tiene una Tara mínima de "+this.taraMinima+". Carga útil de "+this.cargaUtil+" y un volumen de carga de "+this.volumenCarga+"m3");
}

var miPickup = new coche ("Land Rover", "Santana Aníbal", 35, "Marrón tierra", "4x4");
miPickup.prototype = new furgon (1200, 768, 4.5);


miPickup.detalles();
miPickup.prototype.detallesTecnicos();


// Herencia (simplificada)
var perro  = function () {
    this.patas = 4;
    this.ojos = 2;
};

var pastorAleman = function () {
    this.colorLengua = "negra";
    this.colorOjos = "marrón";
    this.capacidadTrabajo = true;
    this.especialidad = "Pastoreo";
};

pastorAleman.prototype = new perro();

var miPerro = new pastorAleman();
console.log("Número patas: "+miPerro.patas+"\n Número ojos: "+miPerro.ojos+"\n Color Lengua: "+miPerro.colorLengua+"\n Color ojos: "+miPerro.colorOjos+"\n Capacidad de trabajo: "+miPerro.capacidadTrabajo+"\n Especialidad: "+miPerro.especialidad);



// Eliminando restricciones en los argumentos
var cocheEmpresa = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = "" || tipo;
    var ITVPasada = true;
    var ITVfrecuencia = "Cada año";
    var seguroEnRegla = true;
    var companySeguros = "SegurExpress";
    var tipoSeguro = "a terceros";
    if (this.tipo == ""){
        this.tipo = "berlina";
    }
    
    
    function dameDetalles(){
      console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color);
    }
    
    function datosPrivados() {
        if (ITVPasada && seguroEnRegla)
            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
        else{
            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
        }
    }
    
    datosPrivados();
    dameDetalles();
};

var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");


// Creando un ID
var contador = 0;

var cocheEmpresa = function (marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = "" || tipo;
    this.id = contador++;
    var ITVPasada = true;
    var ITVfrecuencia = "Cada año";
    var seguroEnRegla = true;
    var companySeguros = "SegurExpress";
    var tipoSeguro = "a terceros";
    if (this.tipo == ""){
        this.tipo = "berlina";
    }
    
    function dameDetalles(){
      console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color);
    }
    
    function datosPrivados() {
        if (ITVPasada && seguroEnRegla)
            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
        else{
            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
        }
    }
    
    function identificador(){
        console.warn("Recuerda! Tu coche esta idenficicado como coche numero "+contador);
    }
    
    datosPrivados();
    dameDetalles();
    identificador();
};

var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
var otroCoche = new cocheEmpresa ("Audi", "A8", 5, "gris", "Berlina");
var miCoche2 = new cocheEmpresa ("Seat", "Ibiza", 9, "rojo", "Utilitario");


// Extension de objetos nativos (usando prototipos)
Array.prototype.coincidencias = function(palabra) {
    var coincidencias = 0;
    for (var i=0; i<this.length; i++) {
        if (this[i] == palabra) {
            coincidencias++;
        }
    }
    console.warn("Se encontraron "+coincidencias+" coincidencia(s) de la palabra");
};


var amigos = ["Charlie", "Marco", "Luis", "Jose", "Miguel", "Jose", "Luis", "Oscar"];
amigos.coincidencias("Jose");

/*= EJERCICIOS =*/

// Nº 1
/* -- SISTEMA ACUAPÓNICO --
* Vamos a crear un sistema acuapónico en nuestra oficina.
* Nuestro objetivo será desarrollar una aplicación para gestionarlo todo.
* Con este ejercicio nos centraremos en la POO y los prototipos.
*/

// nº 1 (Usando Constructores)
// Vamos a instalar un sistema acuaponico en Casa. Así que nuestra primera misión será definir nuestro equipo.
// Contamos con un sistema compuesto de un tanque principal y una cama donde plantaremos nuestros vegetales.
/* Caracteristicas Tanque:
 capacidad: 40 Litros
 dimensiones: 51 cm x 25.5 de ancho x 30.5 de alto 
 color: Gris Claro
 Nivel agua Máximo: 29 cm
*/
/* Caracteristicas Cama:
 capacidad: 10 Litros
 dimensiones: 51 cm x 25.5 de ancho x 10 de alto 
 color: Rojo
 Nivel agua Máximo: 5 cm
 Sustrato: Piedra volcánica
*/ 

var acuApp = acuApp || {};

// Constructores
var constructorTanque = function (capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo) {
    this.capacidad = capacidad;
    this.capacidadMedida = capacidadMedida;
    this.dimensiones = alto * ancho *largo;
    this.alto = alto;
    this.ancho = ancho;
    this.largo = largo;
    this.dimensionesMedida = dimensionesMedida;
    this.color = color;
    this.nivelAguaMaximo = nivelAguaMaximo;
};

var constructorCama = function (capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo, sustrato) {
    this.capacidad = capacidad;
    this.capacidadMedida = capacidadMedida;
    this.dimensiones = alto * ancho *largo;
    this.alto = alto;
    this.ancho = ancho;
    this.largo = largo;
    this.medida = dimensionesMedida;
    this.color = color;
    this.nivelAguaMaximo = nivelAguaMaximo;
    this.sustrato = sustrato;
};


acuApp["tanque principal"] = new constructorTanque(40, "Litros", 30.5, 25.5, 51, "Cm", "Gris Claro", 2);
acuApp["cama principal"] = new constructorCama(10, "Litros", 10, 25.5, 51, "Cm", "Rojo", 5, "Piedra volcánica");
