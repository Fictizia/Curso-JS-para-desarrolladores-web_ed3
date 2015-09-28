/*== Clase 9 ==*/

/*= TEORÍA =*/

// -- this, .call(), .apply(), .bind()  --

// En Método
var objeto = {
    valor: 0,
    incrementar: function(incremento){
       this.valor += incremento;
    }
};

objeto.incrementar(6);

// En Función (Controlando this)
// ERROR!
var objeto = {
    valor: 0,
    incrementar: function(incremento){
       function otraFuncion(unValor){ 
           this.valor += unValor;
       }
       otraFuncion(incremento);
    }
};

objeto.incrementar(6);

// CORRECTO!
var objeto = {
    valor: 0,
    incrementar: function(incremento){
       var esto = this; // "esto" puede ser "that"
       function otraFuncion(unValor){ 
           esto.valor += unValor;
       }
       otraFuncion(incremento);
    }
};

objeto.incrementar(6);


// En Constructor
var fabricaPersonas = function(){
    this.nombre = 'Pepe';
};

fabricaPersonas.prototype.mostrarNombre = function(){
    console.log(this.nombre);
};

var miPersona = new fabricaPersonas();
miPersona.mostrarNombre();


// con .apply()

var fabricaPersonas  = function(){
    this.nombre = 'Pepe';
};

fabricaPersonas.prototype.mostrarNombre = function(){
    console.log(this.nombre);
};

var otroObjeto = {
    nombre: 'Oscar'
};

var miPersona = new fabricaPersonas();
miPersona.mostrarNombre();
miPersona.mostrarNombre.apply(otroObjeto); // Cambiando el valor de this


// Modificación de contexto con .call()
var objeto = {
  multiplicador: 2,
  sumatorio: function(num1, num2){
     return (num1 + num2) * this.multiplicador;
  }
};

var resultado = objeto.sumatorio(2,2);
console.log(resultado);


var cambio = {
  multiplicador: 5
};

var resultado = objeto.sumatorio.call(cambio, 5, 5);
console.log(resultado);


// Modificación de contexto con .apply()
var objeto = {
  multiplicador: 2,
  sumatorio: function(num1, num2){
     return (num1 + num2) * this.multiplicador;
  }
};

var resultado = objeto.sumatorio(2,2);
console.log(resultado);


var cambio = {
  multiplicador: 5
};

var resultado = objeto.sumatorio.apply(cambio, [5,5]);
console.log(resultado); 


// Modificación de contexto con bind()
var objeto = {
  multiplicador: 2,
  sumatorio: function(num1, num2){
     return (num1 + num2) * this.multiplicador;
  }
};

var resultado = objeto.sumatorio(2,2);
console.log(resultado);

var cambio = {
  multiplicador: 5
};

var cambiandoFuncion = objeto.sumatorio.bind(cambio);
var resultado = cambiandoFuncion(5, 5);
console.log(resultado);

// -- Trabajando prototipos  --

// .hasOwnProperty()
var o = new Object();
o.prop = 'exists';

function changeO() {
  delete o.prop;
}

o.hasOwnProperty('prop');
changeO();
o.hasOwnProperty('prop');


// .create()
var coche = {
    marca: "Seat",
    modelo: "Panda",
    antiguedad: 20,
    color: "azul",
    tipo: "turismo"
};

var clonCoche = Object.create(coche);

console.log(clonCoche.marca+" "+clonCoche.modelo);


// .isPrototypeOf()
console.log(coche.isPrototypeOf(clonCoche));


// .valueOf()
var str = "Hello World!";
var res = str.valueOf();
console.log(res);

// .constructor()
function arbol (nombre) {
   this.nombre = nombre;
}

var miArbol = new arbol( "Pino" );
console.log( "miArbol.constructor es " + miArbol.constructor );

//.toLocalString()
var date = new Date();
console.log(date.toLocaleString('es-ES'));
console.log(date.toLocaleString('en-US'));
console.log(date.toLocaleString('ko-KR'));


// .toString()
function Perro(nombre,criadero,color,sexo) {
   this.nombre=nombre;
   this.criadero=criadero;
   this.color=color;
   this.sexo=sexo;
}

var elPerro = new Perro("Gabby","Laboratorio","chocolate","femenino");

elPerro.toString();

Perro.prototype.toString = function perroToString() {
  var retorno = "Perro " + this.nombre + " es " + this.sexo + " " + this.color + " " + this.criadero;
  return retorno;
};

elPerro.toString();

/* 
====================================================================
=====----------------- BACKBONE -------------------------------=====
====================================================================
*/

/* DEPENDENCIAS
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js"></script>
*/

/* -- Modelos -- */

// - Extendemos el modelo
var Coche = Backbone.Model.extend();
var cochecito = new Coche();

// - .set() -> Guardar valores
cochecito.set( 'marca', 'Seat' );

// Aplicando .toJSON() para la lectura
console.log(cochecito) 
console.log( cochecito.toJSON() );

// - .get() -> Leer valores
console.log( 'La marca del coche es ' + cochecito.get( 'marca' ) );

// --------------------------------------------------------------------

// - Pasando pares de valor en la instanciación
var Coche = Backbone.Model.extend();
var cochecito = new Coche({
    'marca': 'Seat',
    'modelo': 'Ibiza'
});

console.log( cochecito.toJSON() );
console.log( 'La marca del coche es ' + cochecito.get( 'marca' ) + ' y el modelo ' + cochecito.get( 'modelo' ) + '.' );

// --------------------------------------------------------------------

// - Valores por defecto en el Modelo

var Coche = Backbone.Model.extend({
    defaults: {
        'marca': 'Seat',
        'modelo': 'Ibiza'
  }
});

var cocheDesconocido = new Coche();
var miCoche = new Coche({ 'modelo': 'Toledo' });

console.log( cocheDesconocido.toJSON() );
console.log( miCoche.toJSON() );

// --------------------------------------------------------------------

// - Asignando funciones
var Coche = Backbone.Model.extend({
    defaults: {
        'marca': 'Seat',
        'modelo': 'Ibiza',
        'ITVPasada': true
    },
    actualizaModelo: function(){
        var nuevoModelo = prompt( 'Introduce el nuevo modelo: ' );
        this.set( {'modelo': nuevoModelo} );
    }
});

var cochecito = new Coche();
console.log( cochecito.toJSON() );

cochecito.actualizaModelo();

console.log( cochecito.toJSON() );

// --------------------------------------------------------------------

// - listener 
var Coche = Backbone.Model.extend({
    defaults: {
        'marca': 'Seat',
        'modelo': 'Ibiza',
        'ITVPasada': true
    },
    actualizaModelo: function( nuevoModelo ){
        this.set({ 'modelo': nuevoModelo });
    }
});


var cochecito = new Coche();
console.log( cochecito.toJSON() );

// Listener
cochecito.on( 'change:modelo', function(){
    console.log( 'Modelo modificado!' );
} );

// Actualizamos el nombre
cochecito.actualizaModelo( 'Toledo' );
console.log( cochecito.toJSON() );




/* -- Colecciones -- */

// - Asociamos nuestro Modelo a una colección
var cocheModelo = Backbone.Model.extend({
    defaults: {
        'marca': 'Seat',
        'modelo': 'Ibiza',
        'ITVPasada': true
    },
    actualizaModelo: function( nuevoModelo ){
        this.set({ 'modelo': nuevoModelo });
    }
});

var cocheColeccion = Backbone.Collection.extend({
    Model: cocheModelo,
    url: "#" // CRUD
});

var cochecito = new cocheColeccion();

console.log( cochecito.toJSON() );

// --------------------------------------------------------------------

// - .add() -> Añadir modelos a la colección
var cocheModelo = Backbone.Model.extend();

var cocheColeccion = Backbone.Collection.extend({
    Model: cocheModelo,
    url: "#" // CRUD
});

var cochecito = new cocheColeccion();
cochecito.add({ 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false});

console.log( cochecito.toJSON() );


// --------------------------------------------------------------------

// - Añadir elementos durante la creación de la Colección
cocheModelo = Backbone.Model.extend();

cocheColeccion = Backbone.Collection.extend({
    model: cocheModelo,
    url: "#"
});

var cochecito = new cocheModelo([
    { 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false},
    { 'marca': 'Audi', 'modelo': 'A4', 'ITVPasada': true}
]);

console.log( cochecito.toJSON() );


// --------------------------------------------------------------------

// - .at() -> Ajustando posiciones
var cocheModelo =  Backbone.Model.extend();
var coche1 = new cocheModelo({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true, 'posicion': 1});
var coche0 = new cocheModelo({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true, 'posicion': 0});

var cocheColeccion = Backbone.Collection.extend({
    model: cocheModelo,
    url: "#"
});

var cochecito = new cocheColeccion([
    { 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false},
    { 'marca': 'Audi', 'modelo': 'A4', 'ITVPasada': true}
]);

cochecito.add( coche1, {at : 1} );
console.log( cochecito.toJSON() );

cochecito.add( coche0, {at: 0} );
console.log( cochecito.toJSON() );


// --------------------------------------------------------------------

// - .remove() -> Eliminando objetos
var primerElemento = cochecito.at(0);
cochecito.remove( primerElemento );
console.log( cochecito.toJSON() );

// Eliminamos un objeto determinado
cochecito.remove( coche1 );
console.log( cochecito.toJSON() );


// --------------------------------------------------------------------

// - .each() -> Recorriendo todos los objetos
cochecito.each( function( cadaCoche ){
    console.log( 'El coche es un  ' + cadaCoche.get( 'marca' ) + ' ' +cadaCoche.get( 'modelo' ) );
} );


// --------------------------------------------------------------------

// - .on() -> añadimos un listener para un evento en la colección
var cocheModelo =  Backbone.Model.extend();
var cocheColeccion = Backbone.Collection.extend({
    model: cocheModelo,
    url: "#"
});

var cochecito = new cocheColeccion();

cochecito.on( 'add', function(){
    console.log( "Cambios en la colección! Hemos añadido con add() un elemento!" );
} );

cochecito.add({ 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false});
cochecito.add({ 'marca': 'Audi', 'modelo': 'A4', 'ITVPasada': true});
cochecito.add({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true});
cochecito.add({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true});

// --------------------------------------------------------------------

// - .on() -> añadimos un listener para varios eventos en la colección
var cocheModelo =  Backbone.Model.extend();
var cocheColeccion = Backbone.Collection.extend({
    model: cocheModelo,
    url: "#"
});

var cochecito = new cocheColeccion();

cochecito.on( 'add remove', function(){
    console.log( "Cambios en la colección! Hemos añadido o borrado un elemento!" );
} );

cochecito.add({ 'marca': 'Seat', 'modelo': 'Toledo', 'ITVPasada': false});
cochecito.add({ 'marca': 'Audi', 'modelo': 'A4', 'ITVPasada': true});
cochecito.add({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true});
cochecito.add({ 'marca': 'Fiat', 'modelo': 'Punto', 'ITVPasada': true});
console.log( cochecito.toJSON() );

primerElemento = cochecito.at(0);
cochecito.remove( primerElemento );
console.log( cochecito.toJSON() );


/* -- Vista -- */

// - Extendemos la vista
var cocheVista = Backbone.View.extend();
var vistaPrincipal = new cocheVista();

console.log( vistaPrincipal );


// --------------------------------------------------------------------

// - el -> por defecto: div.
var cocheVista = Backbone.View.extend();
var vistaPrincipal = new cocheVista();

console.log( vistaPrincipal.el );

// --------------------------------------------------------------------

// - render: -> Renderizmos ("pintamos") la vista.
var cocheVista = Backbone.View.extend({
    render: function(){
        //this.$el.append( '<h1>Hola Backbone!</h1>' ); // Ojo! a los errores por repetición
        this.$el.html( '<h1>Hola Backbone!</h1>' );

        return this;
    }
});

var vistaPrincipal = new cocheVista();

vistaPrincipal.render();

console.log( vistaPrincipal.el );


// --------------------------------------------------------------------

// - initialize: -> Para renderizar automaticamente la vista.
var cocheVista = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html( '<h1>Hola Backbone!</h1>' );
        return this;
    }
});

var vistaPrincipal = new cocheVista();
console.log( vistaPrincipal.el );
// --------------------------------------------------------------------


// - tagName: -> Asignar etiquetas
var cocheVista = Backbone.View.extend({
    tagName : 'h1',
    initialize: function(){
        var nombre = prompt ( 'Como te llamas? \n (Por defecto = Backbone)' );
        nombre = nombre || 'Backbone';
        this.render( nombre );
    },
    render: function( nombre ){
        this.$el.text( 'Hola ' + nombre +'!' );
        $( '#vista01' ).html( this.el );
        return this;
    }
});

var vistaPrincipal = new cocheVista();
// --------------------------------------------------------------------


/* -- Plantillas -- */
// - Usando underscore.js -> <%= ... %>
var plantilla  = _.template( 'Tenemos un <%= marca %>. El modelo <%= modelo %>. Todo un clásico!' );

console.log(
    plantilla( {marca: 'Seat', modelo: 'Ibiza'} )
);
// --------------------------------------------------------------------


// Separamos la plantilla 
var cocheModelo = Backbone.Model.extend();
var cocheVista = Backbone.View.extend({
    el: '#vista02',
    plantilla: _.template( $('#plantilla-vistacoche').html() ),
    initialize: function( modelo ){
        this.$el.html( this.plantilla ( modelo.toJSON() ));
    },
    render: function(){
        $('#vista02').html( this.$el );
        return this;
    }
});

cochecito = new cocheModelo({
    'marca': 'Seat',
    'modelo': 'Toledo',
    'url': 'https://www.wikiwand.com/es/SEAT_Toledo'
});
var vistaCochecito = new cocheVista( cochecito );
// --------------------------------------------------------------------


// Cambiamos la plantilla pero no nuestro JS
var cocheModelo = Backbone.Model.extend();
var cocheVista = Backbone.View.extend({
    el: '#vista02',
    plantilla: _.template( $('#plantilla-vistacochedetalle').html() ),
    initialize: function( modelo ){
        this.$el.html( this.plantilla ( modelo.toJSON() ));
    },
    render: function(){
        $('#vista02').html( this.$el );
        return this;
    }
});

cochecito = new cocheModelo({
    'marca': 'Seat',
    'modelo': 'Toledo',
    'url': 'https://www.wikiwand.com/es/SEAT_Toledo'
});
var vistaCochecito = new cocheVista( cochecito );
// --------------------------------------------------------------------