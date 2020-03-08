//Un algoritmo que permita ingresar N datos correspondientes al genero de N numero de personas y determine el porcentaje de hombres y mujeres que hay

var num = 0;
var mas = 0;
var fem = 0;
var i;
var sexo = 0;

while (true) {
    num = prompt("ingrese el numero de personas: ");
    break;
}

mas = prompt("ingrese la cantidad de hombres: ");
fem = prompt("ingrese la cantidad de mujeres: ");

for (var i = 1; i <= num; i++) {
    while (true) {
        sexo = prompt("digite el sexo, 1 cuando sea hombre, 2 cuando sea mujer");
        if (sexo == "1" || sexo == "2") {
            break;
        }
    }

    if (sexo = 1) {
        mas = mas + 1
    } else {
        fem = fem + 1
    }
}

fem = parseInt(fem * 100) / num;
mas = parseInt(mas * 100) / num;

alert("el porcentaje de hombre es " + mas);
alert("el porcentaje de mujeres es " + fem);