// Firebase
var myFBAdress = "https://<<--APP-->>>.firebaseio.com/formulario";
var formulario = new Firebase(myFBAdress);
var inscritos = "";
document.getElementById('nuevosInscritos').style.display = 'none';

function subirDatos () {

	var email = document.getElementById("email").value;
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var edad = document.getElementById("edad").value;

	formulario.orderByChild('email')
    .equalTo(email)
    .once('value', function(snap){
         var usuarioEncontrado = snap.val();
         if(usuarioEncontrado !== null) {
			document.body.innerHTML = "Tu email, "+email+", ya esta registrado.";
         } else {
			formulario.push({
				email: email,
				nombre: nombre,
				apellidos: apellidos,
				edad: edad
			});
         }
    });
}

formulario.on("child_added", function(snapshot, prevChildKey) {
  var nuevosInscritos = snapshot.val();
  inscritos += "<li><p> Email: <span>"+nuevosInscritos.email+"</span> Nombre: <span>"+nuevosInscritos.nombre+"</span> Apellidos: <span>"+nuevosInscritos.apellidos+"</span> Edad: <span>"+nuevosInscritos.edad+"</span></p></li>" ;
  document.getElementById("nuevosInscritos").innerHTML = inscritos;
  document.getElementById('nuevosInscritos').style.display = 'block';
});