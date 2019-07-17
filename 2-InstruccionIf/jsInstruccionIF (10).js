function mostrar() {
	//Genero el número RANDOM entre 1 y 10 

	sorteo = Math.floor(Math.random() * 10) + 1;

	if (sorteo == 9 || sorteo == 10) {

		alert(sorteo + " Excelente")
	}
	else {
		if (sorteo < 9 && sorteo > 4) {

			alert(sorteo + " APROBO")
		}
		else

			alert(sorteo + " Vamos la proxima se puede")
	}


}//FIN DE LA FUNCIÓN