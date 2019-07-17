function mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);
var estado = document.getElementById("estadoCivil").value;

if (edad <= 17 && estado != "Soltero") {

    alert("Es muy pequeno para NO estar soltero");

}

}//FIN DE LA FUNCIÓN