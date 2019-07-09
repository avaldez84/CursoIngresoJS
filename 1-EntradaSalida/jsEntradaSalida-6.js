/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //declaramos las variables a usar
    var suma;
    var Uno;
    var Dos;

    Uno = document.getElementById("numeroUno").value;  //sacamos los valores del ID
    Dos = document.getElementById("numeroDos").value;

    Uno=parseInt(Uno) //convertimos las cadenas de texto a numericas
    Dos=parseInt(Dos)

    //sumamos las dos variables ya pasadas a numericas

    suma = Uno+Dos;

    //mostramos es resultado de "suma" por alert mas la cadena de texto "la suma es"

    alert("La suma es " + suma);
    

}



