function mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);
var estado = document.getElementById("estadoCivil").value;

console.log(edad);
console.log(estado);

if (edad >= 18 && estado == "Soltero") {

    alert("Es soltero y no es menor");

}


}//FIN DE LA FUNCIÓN