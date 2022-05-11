$(document).ready(function () {
    $("#form1").submit(function (e) {
        e.preventDefault();
        var n = $("#nom").val();
        let msjMostrar = "";
        let envioCorrecto = false;

        if (n.trim().length < 4 || n.trim().length > 7) {
            msjMostrar += "El nombre no tiene la longitud correcta<br>";
            envioCorrecto = true;
        }

        var letraNombre = n.charAt(0);
        if (!esMayuscula(letraNombre)) {
            msjMostrar += "Es minúscula<br>";
            envioCorrecto = true;
        }

        if (envioCorrecto) {
            $("#mensajes").html(msjMostrar);
        }
        else {
            $("#mensajes").html("Formulario Enviado");
        }

    });

    function esMayuscula(letra) {
        return letra == letra.toUpperCase();
    }
})