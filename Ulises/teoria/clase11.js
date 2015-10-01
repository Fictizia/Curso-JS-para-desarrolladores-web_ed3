/*== Clase 11 ==*/

/*= EJERCICIOS =*/

// nº 4
/*
    Añadamos al sistema la posibilidad de saber las condiciones del agua y el entorno.
    - total peces agua fría,
    - total peces invasores
    - total hortalizas.
    - Propiedades del agua -> Nitratos(NO3 mg/l), Nitritos (NO2 mg/l), Dureza Sales (GH), Carbonatos (KH), Ph (Ph), Cloro (CL2 mg/l)
*/

var debugMode = true;

function chivato (tipo, mensaje) {
    if (debugMode) {
        if(tipo == "warn"){
            console.warn(mensaje);
        } else {
            console.log(mensaje);
        }
    }
}

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
    
    this.agregarAgua = function(litros, nitratos, nitritos, durezaSales, carbonatos, ph, cloro){
        this.calidadAgua = this.calidadAgua || {};
        // Nitratos
        this.calidadAgua["nitratos"] = this.calidadAgua["nitratos"] || {};
        this.calidadAgua["nitratos"]["valor"] = nitratos || 10;
        this.calidadAgua["nitratos"]["medida"] = "mg/l";
        this.calidadAgua["nitratos"]["simbolo"] = "NO3";
        // Nitritos
        this.calidadAgua["nitritos"] = this.calidadAgua["nitritos"] || {};
        this.calidadAgua["nitritos"]["valor"] = nitritos || 0.5;
        this.calidadAgua["nitritos"]["medida"] = "mg/l";
        this.calidadAgua["nitritos"]["simbolo"] = "NO2";
        // Dureza de Sales
        this.calidadAgua["dureza de sales"] = this.calidadAgua["dureza de sales"] || {};
        this.calidadAgua["dureza de sales"]["valor"] = durezaSales || ">7ºd";
        this.calidadAgua["dureza de sales"]["medida"] = "N/A";
        this.calidadAgua["dureza de sales"]["simbolo"] = "GH";
        // Carbonatos
        this.calidadAgua["carbonatos"] = this.calidadAgua["carbonatos"] || {};
        this.calidadAgua["carbonatos"]["valor"] = carbonatos || "6ºd";
        this.calidadAgua["carbonatos"]["medida"] = "N/A";
        this.calidadAgua["carbonatos"]["simbolo"] = "KH";
        // PH
        this.calidadAgua["ph"] = this.calidadAgua["ph"] || {};
        this.calidadAgua["ph"]["valor"] = ph || 7.2;
        this.calidadAgua["ph"]["medida"] = "N/A";
        this.calidadAgua["ph"]["simbolo"] = "PH";
        // Cloro (CL2 mg/l)
        this.calidadAgua["cloro"] = this.calidadAgua["cloro"] || {};
        this.calidadAgua["cloro"]["valor"] = cloro || 0.2;
        this.calidadAgua["cloro"]["medida"] = "mg/l";
        this.calidadAgua["cloro"]["simbolo"] = "CL2";
        // Manejo de caudal
        this.nivelAgua += litros;
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
    
    this.calcularFrios = function(){
        var numero = 0;
        for (var key in this.peces){
            if(this.peces[key].clase == "aguas fria"){
                numero++;
            }
        }
        this.peces["total aguas fria"] = numero;
    };    
    
    this.calcularInvasores = function(){
        var numero = 0;
        for (var key in this.peces){
            if(this.peces[key].clase == "invasora"){
                numero++;
            }
        }
        this.peces["total invasora"] = numero;
    };
    
    this.estadoGeneral = function(){
        
        this.calcularInvasores();    
        this.calcularFrios();
        
        var resumenGeneral = "================================\n";
        resumenGeneral += "Estado del Agua\n";
        resumenGeneral += "================================\n";
        resumenGeneral += "Agua disponible: "+this.nivelAgua+"/"+nivelAguaMaximo+"l\n";
        resumenGeneral += "Nitratos("+this.calidadAgua["nitratos"]["simbolo"]+"): "+this.calidadAgua["nitratos"]["valor"]+this.calidadAgua["nitratos"]["medida"]+"\n";
        resumenGeneral += "Nitritos("+this.calidadAgua["nitritos"]["simbolo"]+"): "+this.calidadAgua["nitritos"]["valor"]+this.calidadAgua["nitritos"]["medida"]+"\n";
        resumenGeneral += "Dureza de sales("+this.calidadAgua["dureza de sales"]["simbolo"]+"): "+this.calidadAgua["dureza de sales"]["valor"]+"\n";
        resumenGeneral += "Carbonatos("+this.calidadAgua["carbonatos"]["simbolo"]+"): "+this.calidadAgua["carbonatos"]["valor"]+"\n";
        resumenGeneral += "Ph("+this.calidadAgua["ph"]["simbolo"]+"): "+this.calidadAgua["ph"]["valor"]+"\n";
        resumenGeneral += "Cloro("+this.calidadAgua["cloro"]["simbolo"]+"): "+this.calidadAgua["cloro"]["valor"]+this.calidadAgua["cloro"]["medida"]+"\n";
        resumenGeneral += "================================\n";
        resumenGeneral += "Estado de los Peces\n";
        resumenGeneral += "================================\n";
        resumenGeneral += "Total de Agua Fria: "+this.peces["total aguas fria"]+"\n";
        resumenGeneral += "Total de Invasores: "+this.peces["total invasora"]+"\n";
        resumenGeneral += "================================\n";
        
        console.log(resumenGeneral);
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
    
    this.agregarAgua = function(litros, nitratos, nitritos, durezaSales, carbonatos, ph, cloro){
        this.calidadAgua = this.calidadAgua || {};
        // Nitratos
        this.calidadAgua["nitratos"] = this.calidadAgua["nitratos"] || {};
        this.calidadAgua["nitratos"]["valor"] = nitratos || 10;
        this.calidadAgua["nitratos"]["medida"] = "mg/l";
        this.calidadAgua["nitratos"]["simbolo"] = "NO3";
        // Nitritos
        this.calidadAgua["nitritos"] = this.calidadAgua["nitritos"] || {};
        this.calidadAgua["nitritos"]["valor"] = nitritos || 0.5;
        this.calidadAgua["nitritos"]["medida"] = "mg/l";
        this.calidadAgua["nitritos"]["simbolo"] = "NO2";
        // Dureza de Sales
        this.calidadAgua["dureza de sales"] = this.calidadAgua["dureza de sales"] || {};
        this.calidadAgua["dureza de sales"]["valor"] = durezaSales || ">7ºd";
        this.calidadAgua["dureza de sales"]["medida"] = "N/A";
        this.calidadAgua["dureza de sales"]["simbolo"] = "GH";
        // Carbonatos
        this.calidadAgua["carbonatos"] = this.calidadAgua["carbonatos"] || {};
        this.calidadAgua["carbonatos"]["valor"] = carbonatos || "6ºd";
        this.calidadAgua["carbonatos"]["medida"] = "N/A";
        this.calidadAgua["carbonatos"]["simbolo"] = "KH";
        // PH
        this.calidadAgua["ph"] = this.calidadAgua["ph"] || {};
        this.calidadAgua["ph"]["valor"] = ph || 7.2;
        this.calidadAgua["ph"]["medida"] = "N/A";
        this.calidadAgua["ph"]["simbolo"] = "PH";
        // Cloro (CL2 mg/l)
        this.calidadAgua["cloro"] = this.calidadAgua["cloro"] || {};
        this.calidadAgua["cloro"]["valor"] = cloro || 0.2;
        this.calidadAgua["cloro"]["medida"] = "mg/l";
        this.calidadAgua["cloro"]["simbolo"] = "CL2";
        // Manejo de caudal
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
    
    this.calcularHortalizas = function(){
        var numero = 0;
        for (var key in this.plantas){
            if(this.plantas[key].clase == "hortaliza"){
                numero++;
            }
        }
        this.plantas["total hortalizas"] = numero;
    };
    
    this.estadoGeneral = function(){
        
        this.calcularHortalizas();
        
        var resumenGeneral = "================================\n";
        resumenGeneral += "Estado del Agua\n";
        resumenGeneral += "================================\n";
        resumenGeneral += "Agua disponible: "+this.nivelAgua+"/"+nivelAguaMaximo+"l\n";
        resumenGeneral += "Nitratos("+this.calidadAgua["nitratos"]["simbolo"]+"): "+this.calidadAgua["nitratos"]["valor"]+this.calidadAgua["nitratos"]["medida"]+"\n";
        resumenGeneral += "Nitritos("+this.calidadAgua["nitritos"]["simbolo"]+"): "+this.calidadAgua["nitritos"]["valor"]+this.calidadAgua["nitritos"]["medida"]+"\n";
        resumenGeneral += "Dureza de sales("+this.calidadAgua["dureza de sales"]["simbolo"]+"): "+this.calidadAgua["dureza de sales"]["valor"]+"\n";
        resumenGeneral += "Carbonatos("+this.calidadAgua["carbonatos"]["simbolo"]+"): "+this.calidadAgua["carbonatos"]["valor"]+"\n";
        resumenGeneral += "Ph("+this.calidadAgua["ph"]["simbolo"]+"): "+this.calidadAgua["ph"]["valor"]+"\n";
        resumenGeneral += "Cloro("+this.calidadAgua["cloro"]["simbolo"]+"): "+this.calidadAgua["cloro"]["valor"]+this.calidadAgua["cloro"]["medida"]+"\n";
        resumenGeneral += "================================\n";
        resumenGeneral += "Estado de las Plantas\n";
        resumenGeneral += "================================\n";
        resumenGeneral += "Total Hortalizas: "+this.plantas["total hortalizas"]+"\n";

        console.log(resumenGeneral);
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
acuApp.cama1.agregarAgua(100);
acuApp.tanque1.agregarAgua(987, 25, 0.5, ">14ºd", "3ºd", 8.0, 0.4);
acuApp.tanque1.estadoGeneral();
acuApp.cama1.estadoGeneral();