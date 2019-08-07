function mostrar() {
    var peso = 0;
    var flag = 0;
    var cantPares = 0;
    var cantImpares = 0;
    var cantCeros = 0;
    var acumPos = 0;
    var cantPos = 0;
    var acumNeg = 0;
    var cantNeg = 0;
    var marcaMax;
    var marcaMin;
    var maximo;
    var minimo;
    var marca;
    var respuesta;
    
    do {
        marca = prompt("Ingrese una marca: ");
        do {
            peso = parseInt(prompt("Ingrese un peso (1/100): "));

        } while (peso <= 1 || peso >= 100 || isNaN(peso));
        do {
            temperatura = parseInt(prompt("Ingrese un temperatura(-30/30): "));

        }while (temperatura <= -30 || temperatura >= 30 || isNaN(peso));

        
        if (peso > maximo || flag == 0) {   //verifico peso y marca maximo o la primera iteracion
            
            maximo = peso;
            marcaMax = marca;
        }
        if (peso < minimo || flag == 0) {  //verifico peso y marca minimo o la primera iteracion
            minimo = peso;
            marcaMin = marca;
            flag = 1;
            
        }
        if (temperatura > 0) {    //verifico si es negativo o positivo
            cantPos++
        }
        else if (temperatura < 0) {
            cantNeg++
        }
        if (temperatura % 2 == 0) { //cuento los pares impares y ceros
            TempPares++;
            
        }
        else if (temperatura % 2 != 0) {
            TempImpares++;
            
        }
        respuesta=prompt('Toque una tecla para continuar (n para salir): ')
        }while(respuesta!='n');
} 
    alert("Temperaturass Pares: " + cantPares + " Temperaturas impares: " + cantImpares );
    alert("suma negativos: " + acumNeg);
    alert("peso maximo: "+maximo +"promedio peso: " +peso / cantPos);
    alert("marca maxima: "+marcaMax);
    
        //a) La cantidad de temperaturas pares. 
        //b) La marca del producto más pesado 
        //c) La cantidad de productos que se conservan a menos de 0 grados. 
        //d) El promedio del peso de todos los productos.	
        //f) El peso máximo y el mínimo.
