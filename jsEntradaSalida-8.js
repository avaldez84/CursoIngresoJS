/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaramos las variables a usar
    var suma;
    var Uno;
    var Dos;

    Uno = document.getElementById("numeroDividendo").value;  //sacamos los valores del ID
    Dos = document.getElementById("numeroDivisor").value;

    Uno=parseInt(Uno); //convertimos las cadenas de texto a numericas
    Dos=parseInt(Dos);

    //dividimos las dos variables ya pasadas a numericas

    resto = Uno%Dos;

    //mostramos es resultado de "resto" por alert mas la cadena de texto "la resto es"

    alert("El resto es " + resto);
}
