function mostrar() {
    //tomo la edad  

    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Enero":
            {
                alert("Comiencen el año");
                break;
            }
        case "Marzo":
            {
                alert("Comienzan las clases");
                break;
            }

        case "Julio":
            {
                alert("Se vienen las vacaciones");
                break;
            }
        case "Diciembre":
            {
                alert("Felices fiestas");
                break;
            }
        default:
            {alert("no hay informacion para este mes")}
    }
}//FIN DE LA FUNCIÓN