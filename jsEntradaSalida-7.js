/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
    
    //declaramos las variables a usar
    var suma;
    var Uno;
    var Dos;

    Uno = document.getElementById("numeroUno").value;  //sacamos los valores del ID
    Dos = document.getElementById("numeroDos").value;

    Uno=parseInt(Uno) //convertimos las cadenas de texto a numericas
    Dos=parseInt(Dos)

    //restamos las dos variables ya pasadas a numericas

    suma = Uno-Dos;

    //mostramos es resultado de "suma" por alert mas la cadena de texto "la suma es"

    alert("La suma es " + suma);

}

function multiplicar()
{ 
    
    //declaramos las variables a usar
    var suma;
    var Uno;
    var Dos;

    Uno = document.getElementById("numeroUno").value;  //sacamos los valores del ID
    Dos = document.getElementById("numeroDos").value;

    Uno=parseInt(Uno) //convertimos las cadenas de texto a numericas
    Dos=parseInt(Dos)

    //multiplicamos las dos variables ya pasadas a numericas

    suma = Uno*Dos;

    //mostramos es resultado de "suma" por alert mas la cadena de texto "la suma es"

    alert("La suma es " + suma);

}

function dividir()
{
    
    //declaramos las variables a usar
    var suma;
    var Uno;
    var Dos;

    Uno = document.getElementById("numeroUno").value;  //sacamos los valores del ID
    Dos = document.getElementById("numeroDos").value;

    Uno=parseInt(Uno) //convertimos las cadenas de texto a numericas
    Dos=parseInt(Dos)

    //dividimos las dos variables ya pasadas a numericas

    suma = Uno/Dos;

    //mostramos es resultado de "suma" por alert mas la cadena de texto "la suma es"

    alert("La suma es " + suma);

}

