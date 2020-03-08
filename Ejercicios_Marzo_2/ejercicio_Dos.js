//Pedir 10 números al usuario, y mostrar cuántos de ellos han sido mayores de cero, cuantos negativos, cuantos positivos, cuantos pares, cuantos impares, cuantos múltiplos de 3.

var num;
var positivo = 0;
var negativo = 0;
var cero = 0;
var cant;
var i;
var pares;
var impares;

while (true) {
    cant = prompt("ingrese la cantidad de numeros");
    break;
}
for (i = 1; i <= cant; i++) {
    num = prompt("introduzca el numero ");
    if (num > 0) {
        positivo = positivo + 1
    } else if (num < 0) {
        negativo = negativo + 1
    } else if (num >= 0) {
        cero = cero + 1
    }else if (cant %2==0){
        pares=pares+1
    }

    /* function calcularPares(cant){
        pares=0;
        while(i<cant){
            if(i%2==0){
                pares+=i
            }
        }
    } */

}

alert("la cantidad de numero positivos es: " + positivo);
alert("la cantidad de numero negativos es: " + negativo);
alert("la cantidad de numero mayores a cero es: " + cero);
alert("la cantidad de numero pares es: " + pares);
alert("la cantidad de impares es: " + impares);