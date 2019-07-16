function mostrar() {
    //tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if (edad <= 17 && edad >= 13) {

        alert("Es un adolescente")
    }
    else {
        if (edad >= 18) {

            alert("Es adolescente")

        }
        else {

            alert("Es un niño")
        }

    }


}//FIN DE LA FUNCIÓN