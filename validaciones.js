var nombre = document.getElementById("nombre");
var clave = document.getElementById("clave");
var correo = document.getElementById("correo");

const form = document.getElementById("form");
var mensaje = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault();
    let mensajesMostrar = "";
    let entrar = false;
    let regexEmail =
    mensaje.innerHTML = "";

    if (nombre.value.length < 4 || nombre.value.length > 12) {
        mensajesMostrar += 'El nombre no es valido <br>';
        entrar = true;
    }

    if (nombre.value == "Hola") {
        mensajesMostrar += 'xxx <br>';
        entrar = true;
    }

    if (!regexEmail.test(correo.value)) {
        mensajesMostrar += 'El email esta bien y mal <br>'
        entrar = true
    }

    var letraValidar = nombre.value.charAt(0);
    if(esMayuscula(letraValidar)){
        mensajesMostrar += 'yyy <br>';
        entrar = true;
    }

    if (entrar) {
        mensaje.innerHTML = mensajesMostrar;
    } else {
        mensaje.innerHTML = "Enviado";
    }
});

function esMayuscula(letra) {
    return letra === letra.toUpperCase();
}

/*var miPalabra = "Arbol";
for(var index = 0; index < miPalabra.length; index++)
{
    var letraActual = miPalabra.charAt(index);
    if(esMayuscula(letraActual))
    {
        alert("La letra " + letraActual + " es mayúscula");
    }

    if(esMinuscula(letraActual))
    {
        alert("La letra " + letraActual + " es minúscula");
    }       
}
*/