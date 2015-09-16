var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
 
var app = express();
var debugMode = true;


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
 
mongoose.connect('mongodb://localhost:27017');
 
var esquema = new mongoose.Schema({
	_id: String,
	nombre: String,
	apellidos: String,
	edad: Number
});
 
var user = mongoose.model('inscritos', esquema);
 
app.post('/registro', function(req, res){
	new user({
		_id    : req.body.email,
		nombre: req.body.nombre,
		apellidos: req.body.apellidos,
		edad   : req.body.edad				
	}).save(function(err, doc){
		if(err){
			if (err.code == 11000){
				res.send("Tu email ya esta registrado!");
				debuggador("Un usuario intenta duplicar el mail!");
			} else {
				res.json(err);
				debuggador("ERROR, ERROR, ERROR!!");
				debuggador(err);
			}
		} else {
			res.send('Guardado con éxito!');
			debuggador("Nuevo usuario registrado con exito");
		}
	});
});
 

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Conecta conmigo en http://localhost:' + app.get('port'));
});

// Debug
function debuggador (informacion){
	if(debugMode) {
		console.log(informacion);
	}
}