function mostrar()
{


	var respuesta = 'si';
	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	
	/*do{
		
		numero = parseInt(prompt("Ingrese un numero: "));
				contador = contador + 1;
				acumulador = acumulador + numero;
				respuesta = prompt("desea seguir (si/no)?: ");
				
				
			}while(respuesta == 'si');
	*/		
	//while(respuesta == true){
	while(respuesta == 'si'){
		do{
			numero = parseInt(prompt("Ingrese un numero: "));
			
		}while(isNaN(numero));
	
		contador = contador + 1;
		acumulador = acumulador + numero;
	
		respuesta = prompt("desea seguir (si/no)?: ");
		//confirm("desea continuar");	 (corregir el confirm)
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN