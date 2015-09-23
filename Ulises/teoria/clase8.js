/*== Clase 8 ==*/

/*= TEORÍA =*/

function peticionAjax (movieName) {
var xmlHttp = new XMLHttpRequest(),
                cURL = 'http://www.omdbapi.com/?',
                cParams = 't=' + movieName,
                cParamsMore = '&y=&plot=short&r=json';

            xmlHttp.onreadystatechange = function () {
                var film = {};
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    film = JSON.parse(xmlHttp.responseText);
                    console.info(film);
                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                    film = JSON.parse(xmlHttp.responseText);
                    console.error("ERROR! 404");
                    console.info(film);
                }
            };

            xmlHttp.open( "GET", cURL + cParams + cParamsMore, true );
            xmlHttp.send();
}

peticionAjax("Hulk");

function peticionJqueryAjax (movieName) {

    $.ajax({
        dataType: "json",
        url: 'http://www.omdbapi.com/?t='+movieName+'&y=&plot=short&r=json',
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             console.log( "La solicitud se ha completado correctamente." );
             console.log( data );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
    });

}

peticionJqueryAjax ("Hulk");


// Problemas de CORS
function cuadroElectrico () {

    $.ajax({
        dataType: "json",
        url: 'http://opendata.gijon.es/descargar.php?id=163&tipo=JSON',
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             console.log( "La solicitud se ha completado correctamente." );
             console.log( data );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
    });

}

cuadroElectrico();

/* -- Crear una cuenta y gestionar dependéncias --
* <script src="https://cdn.firebase.com/js/client/2.2.9/firebase.js"></script>
*/

/* -- Guardando Datos
* set( )            - Almacena / remplaza los datos.
* update( )         - Actualzia los datos
* push( )           - Alamacena los datos con un ID único.
* transaction( )    - Para datos complejos y cocurridos.
*/

var ref = new Firebase("https://experimentos.firebaseio.com/fb-ejemplos/escritura");

//OP.1 

// Escritura
var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});

// OP.2

usersRef.child("alanisawesome").set({
  date_of_birth: "June 23, 1912",
  full_name: "Alan Turing"
});
usersRef.child("gracehop").set({
  date_of_birth: "December 9, 1906",
  full_name: "Grace Hopper"
});

// Actualización
var hopperRef = usersRef.child("gracehop");
hopperRef.update({
  "nickname": "Amazing Grace"
});

// Callbacks y IDs
var dataRef = ref.child("IDs");
dataRef.push("Guardando datos...", function(error) {
  if (error) {
    alert("No se han podido guardar los datos." + error);
  } else {
    alert("Datos guardados con exito.");
  }
});

/* -- Trabajar Offline -- */

// Asincronía con evento (value)
var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


// Asincronía con evento (child_changed)
var ref = new Firebase("https://experimentos.firebaseio.com/fb-ejemplos/escritura/users");

// Información de cualquier hijo que haya cambiado
ref.on("child_changed", function(snapshot) {
  var usersData = snapshot.val();
  console.log("Nueva fecha nacimiento: " + usersData.date_of_birth);
});


// Asincronía con evento (child_removed)
var ref = new Firebase("https://experimentos.firebaseio.com/fb-ejemplos/escritura/users");

// Información de cualquier hijo que haya cambiado
ref.on("child_removed", function(snapshot) {
  var usersData = snapshot.val();
  console.log("Usuario eliminado: " + usersData.full_name);
});


// Quitando los callbacks
// Por tipo
ref.off("value");

// Todos
ref.off();


// Callback (una sola vez)
var ref = new Firebase("https://experimentos.firebaseio.com/fb-ejemplos/escritura/users");

ref.once("child_changed", function(snapshot) {
  var usersData = snapshot.val();
  console.log("Nueva fecha nacimiento: " + usersData.date_of_birth);
});


/* -- Consultas Básicas --
*  https://dinosaur-facts.firebaseio.com/
*  orderByChild()
*  orderByKey()
*  orderByValue()
*  orderByPriority()
*/

// orderByChild()
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("height").on("child_added", function(snapshot) {
  console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
});

// orderByKey()
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByKey().on("child_added", function(snapshot) {
  console.log(snapshot.key());
});

// orderByValue()
var scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
scoresRef.orderByValue().on("value", function(snapshot) {
  snapshot.forEach(function(data) {
    console.log("The " + data.key() + " dinosaur's score is " + data.val());
  });
});


/* -- Consultas Avanzadas --
*  https://dinosaur-facts.firebaseio.com/
*  limitToFirst()
*  limitToLast()
*  startAt()
*  endAt()
*  equalTo()
*/

// .limitToFirst()
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("height").limitToFirst(2).on("child_added", function(snapshot) {
  console.log(snapshot.key());
});

// .limitToLast()
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("weight").limitToLast(2).on("child_added", function(snapshot) {
  console.log(snapshot.key());
});

// .orderByValue() y .limitToLast()
var scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
scoresRef.orderByValue().limitToLast(3).on("value", function(snapshot) {
  snapshot.forEach(function(data) {
    console.log("The " + data.key() + " dinosaur's score is " + data.val());
  });
});

//.orderByChild() y .startAt()
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("height").startAt(3).on("child_added", function(snapshot) {
  console.log(snapshot.key());
});


// .orderByKey() y .endAt()
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
  console.log(snapshot.key());
});


// .startAt() y .endAt() usando tilde
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByKey().startAt("b").endAt("b~").on("child_added", function(snapshot) {
  console.log(snapshot.key());
});

// .equalTo()
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
  console.log(snapshot.key());
});


// EJEMPLO: Busquemos un dinosaurio que sea mas pequeño que un Stegosaurus
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.child("stegosaurus").child("height").on("value", function(stegosaurusHeightSnapshot) {
  var favoriteDinoHeight = stegosaurusHeightSnapshot.val();

  var queryRef = ref.orderByChild("height").endAt(favoriteDinoHeight).limitToLast(2)
  queryRef.on("value", function(querySnapshot) {
      if (querySnapshot.numChildren() == 2) {
        querySnapshot.forEach(function(dinoSnapshot) {
          console.log("The dinosaur just shorter than the stegasaurus is " + dinoSnapshot.key());
          return true;
        });
      } else {
        console.log("The stegosaurus is the shortest dino");
      }
  });
});


/* -- CAPACIDADES OFFLINE -- */

// Realizando acciones al desconectarse
var presenceRef = new Firebase('https://experimentos.firebaseio.com/.info/disconnectmessage');
presenceRef.onDisconnect().set("I disconnected!");

// Comprobando el estado
var connectedRef = new Firebase("https://experimentos.firebaseio.com/.info/connected");
connectedRef.on("value", function(snap) {
  if (snap.val() === true) {
    console.log("Conectado");
  } else {
    console.log("Desconectado");
  }
});


/*= EJERCICIOS =*/

// Nº 1
// AJAX - Saber el tiempo meteorológico en una ciudad.

function temperaturaCiudad (ciudad) {
    var xmlHttp = new XMLHttpRequest(),
    cURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad;

    xmlHttp.onreadystatechange = function () {
        var datos = {};
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            datos = JSON.parse(xmlHttp.responseText);
            console.info(datos);
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            datos = JSON.parse(xmlHttp.responseText);
            console.error("ERROR! 404");
            console.info(datos);
        }
    };

    xmlHttp.open( "GET", cURL, true );
    xmlHttp.send();
}

temperaturaCiudad("Madrid");
temperaturaCiudad("Barcelona");
temperaturaCiudad("Valencia");



function temperaturaCiudadJquery (ciudad) {

    $.ajax({
        dataType: "json",
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad,
    })
     .done(function( data, textStatus, jqXHR ) {
         if ( console && console.log ) {
             console.log( "La solicitud se ha completado correctamente." );
             console.log( data );
         }
     })
     .fail(function( jqXHR, textStatus, errorThrown ) {
         if ( console && console.log ) {
             console.log( "La solicitud a fallado: " +  textStatus);
         }
    });

}

temperaturaCiudadJquery("Madrid");
temperaturaCiudadJquery("Barcelona");
temperaturaCiudadJquery("Valencia");

// nº 2 
/*
    Añadamos el agua, para lo que necesitaremos un sistema para añadir y quitar agua, además de 
    un desagüe automático que nos avise cuando el nive del agua sea más de los esperado.
    
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
    /* Funciones */
    
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
    /* Funciones */
    
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
acuApp.cama1.agregarAgua(100);
acuApp.tanque1.agregarAgua(987);