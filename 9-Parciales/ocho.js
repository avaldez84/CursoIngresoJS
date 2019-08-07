function mostrar() {
    var numero;
    var flag = 0;
    var cantPares = 0;
    var cantImpares = 0;
    var cantCeros = 0;
    var acumPos = 0;
    var cantPos = 0;
    var acumNeg = 0;
    var cantNeg = 0;
    var letraMax;
    var letraMin;
    var maximo;
    var minimo;
    var letra;

    var respuesta;
    do {

        do {
            numero = parseInt(prompt("Ingrese un numero:"));

        } while (numero <= -150 || numero >= 150 || isNaN(numero));
        letra = prompt("Ingrese una letra: ");

        if (numero > maximo || flag == 0) {   //verifico numero y letra maximo o la primera iteracion

            maximo = numero;
            letraMax = letra;
        }
        if (numero < minimo || flag == 0) {  //verifico numero y letra minimo o la primera iteracion
            minimo = numero;
            letraMin = letra;
            flag = 1;

        }

        if (numero > 0) {    //verifico si es negativo o positivo
            acumPos += numero;
            cantPos++
        }
        else if (numero < 0) {
            acumNeg += numero;
            cantNeg++
        }
        if (numero % 2 == 0) { //cuento los pares impares y ceros
            cantPares++;

        }
        else if (numero % 2 != 0) {
            cantImpares++;

        }
        else {
            cantCeros++;
        }
        respuesta = prompt("Quiere ingresar otro numero: (S/N)");

    } while (respuesta == "s");

    alert("pares: " + cantPares + " impares: " + cantImpares + " ceros: " + cantCeros);
    alert("promedio positivos: " + acumPos / cantPos + " suma negativos: " + acumNeg);
    alert("numero maximo: "+maximo +" numero minimo: "+minimo );
    alert("letra maxima: "+letraMax +" letra minima: "+letraMin );
    
}