function mostrar() {
    //tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);
    
    if (edad >= 18) {

        alert("Es un adulto");
    }
    else if (edad <= 17 && edad >= 13) {

        alert("Es adolescente");

    }
    else {

        alert("Es un niño");
    }

}
//FIN DE LA FUNCIÓN