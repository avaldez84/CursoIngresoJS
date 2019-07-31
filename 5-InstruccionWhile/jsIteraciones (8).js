function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	do{
		
			numero = parseInt(prompt("Ingrese un numero: "));
			do{
				contador = contador + 1;
			if (numero>0){

				positivo = positivo + numero;
			}
			else if (numero<0){

				negativo=negativo*numero
			}}while(isNaN (numero));
			
			
			respuesta = prompt("desea seguir (si/no)?: ");
				
	}while(respuesta == 'si');
		
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN