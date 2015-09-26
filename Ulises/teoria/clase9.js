/*== Clase 9 ==*/

/*= EJERCICIOS =*/
// Nº 3
/*
    Añadamos ahora nuestras plantas y nuestros peces, teniendo en cuenta sus necesidades de espacio.
    - Incluir una función para quitar peces y elementos.
*/

var debugMode = true;

function chivato (tipo, mensaje) {
    if (debugMode) {
        if(tipo == "warn"){
            console.warn(mensaje);
        } else {
            console.log(mensaje)
        }
    }
};

var acuApp = acuApp || {};

// Constructores
var constructorTanque = function (nombre, capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.capacidadMedida = capacidadMedida;
    this.dimensiones = alto * ancho * largo;
    this.alto = alto;
    this.ancho = ancho;
    this.largo = largo;
    this.dimensionesMedida = dimensionesMedida;
    this.color = color;
    this.nivelAguaMaximo = nivelAguaMaximo;
    this.desagueFuncionando = false;
    this.nivelAgua = 0;
    this.peces = {};
    /* Funciones */
    this.agregarPez = function (nombre, clase, peso, espacio, lugar) {
        this.peces[nombre] = {
            tipo:"pez", 
            clase: clase, 
            peso: peso || 100,
            pesoMedida: "gramos",
            espacio: espacio || 0.05,
            espacioMedida: "m3",
            lugar: lugar || "Tanque principal"
        };
    };
    
    this.quitarPez = function (nombre) {
        var temp = this.peces[nombre];
        delete this.peces[nombre];
        return temp;
    };
    
    this.agregarAgua = function(litros){
        this.nivelAgua = this.nivelAgua + litros;
        if(this.nivelAgua >= this.nivelAguaMaximo){
            if(!this.desagueFuncionando){
                this.desagueFuncionando = true;
                chivato("warn", "Se activó el sistema de desague de emergencia en "+this.nombre);
            }
            chivato("log", "nivel actual: "+this.nivelAgua);
            this.quitarAgua(this.nivelAgua-this.nivelAguaMaximo);
        }
    };
    
    this.quitarAgua = function(litros){
        this.nivelAgua = this.nivelAgua-litros;
        if(this.desagueFuncionando){
            this.desagueFuncionando = false;
            chivato("log", "Se desactivo el sistema de desagüe de emergencia en "+this.nombre);
        }
        chivato("log", "nivel actual: "+this.nivelAgua);
    };
};

var constructorCama = function (nombre, capacidad, capacidadMedida, alto, ancho, largo, dimensionesMedida, color, nivelAguaMaximo, sustrato) {
    this.nombre = nombre;
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
    this.desagueFuncionando = false;
    this.nivelAgua = 0;
    this.plantas = {};
    /* Funciones */
    
    this.agregarPlanta = function (nombre, clase, frutosDisponibles, estadoActual, espacio, lugar) {
    this.plantas[nombre] = {
        nombre: nombre,
        tipo: "planta",
        clase: clase,
        frutosDisponibles: frutosDisponibles,
        estadoActual: estadoActual,
        espacio: espacio || 0.05,
        espacioMedida: "m3",
        lugar: lugar || "Cama principal"
        };
    };
    
    this.quitarPlanta = function (nombre) {
        var temp = this.plantas[nombre];
        delete this.plantas[nombre];
        return temp;
    };
    
    this.agregarAgua = function(litros){
        this.nivelAgua = this.nivelAgua + litros;
        if(this.nivelAgua >= this.nivelAguaMaximo){
            if(!this.desagueFuncionando){
                this.desagueFuncionando = true;
                chivato("warn", "Se activó el sistema de desague de emergencia en "+this.nombre);
            }
            chivato("log", "nivel actual: "+this.nivelAgua);
            this.quitarAgua(this.nivelAgua-this.nivelAguaMaximo);
        }
    };
    this.quitarAgua = function(litros){
        this.nivelAgua = this.nivelAgua-litros;
        if(this.desagueFuncionando){
            this.desagueFuncionando = false;
            chivato("log", "Se desactivo el sistema de desagüe de emergencia en "+this.nombre);
        }
        chivato("log", "nivel actual: "+this.nivelAgua);
    };
};


acuApp.tanque1 = new constructorTanque("Tanque principal",40, "Litros", 30.5, 25.5, 51, "Cm", "Gris Claro", 2);
acuApp.cama1 = new constructorCama("Cama principal", 10, "Litros", 10, 25.5, 51, "Cm", "Rojo", 5, "Piedra volcánica");
acuApp.cama1.agregarPlanta("zanahoria1", "hortaliza", false, "planton");
acuApp.cama1.agregarPlanta("zanahoria2", "hortaliza", true, "cosechable");
acuApp.cama1.agregarPlanta("zanahoria3", "hortaliza", false, "semilla");
acuApp.cama1.agregarPlanta("zanahoria4", "hortaliza", false, "semilla");
var zanahoriaDescartada = acuApp.cama1.quitarPlanta("zanahoria4");
acuApp.tanque1.agregarPez("Koi1", "aguas fria", 200);
acuApp.tanque1.agregarPez("Koi2", "aguas fria", 200);
acuApp.tanque1.agregarPez("pleco", "invasora", 400, 0.5);
acuApp.tanque1.agregarPez("pleco2", "invasora", 1000, 1.5);
var plecoDescartado = acuApp.tanque1.quitarPez("pleco2");