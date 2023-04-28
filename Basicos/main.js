// Ejercicios # 1

function suma(a, b) {
    return a + b;
}

// Ejercicios # 2

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

// Ejercicios # 3

function celsiusAFahrenheit(celsius) {
    return ((9 / 5) * celsius) + 32
}

// Ejercicios # 4

function esPar(numeros) {
    return numeros % 2 == 0 ? 'Es Par' : 'Es Impar';
}

// Ejercicios # 5

function ordenarMayorAMenor(list) {
    return list.sort((a, b) => a - b);
}

// Ejercicios # 6

function encontrarMayor(list) {
    return list.reduce((acumulado, actual) => acumulado > actual ? acumulado : actual);
}

// Ejercicios # 7

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Ejercicios # 8

function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

// Ejercicios # 9

function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + cadena2;
}
// console.log(concatenarCadenas('Hola esto esuna cadena1 ', 'esto es una cdena dos'));

// Ejercicios # 10

function palabraMasLarga(cadena) {
    return cadena.split(' ').reduce((acumulado, actual) => acumulado.length > actual.length ? acumulado : actual);
}
// console.log(palabraMasLarga("Hola como estas esto es una pequeña prueba de como funciona la palabra mas grande parangaracutirimicuaro"));

// Ejercicios # 11

// este ejercicio esta resuelto en el ejercicio 5, solo cambio las palabras

// Ejercicios # 12

function sumaImpares(list) {
    return list.filter(num => num % 2 != 0).reduce((acumulado, actual) => acumulado + actual);
}
// sumaImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); R/ 25

// Ejercicios # 13

function numeroMasRepetido(list) {
    list = list.reduce((acumulado, actual) => { (acumulado[actual]) ? acumulado[actual]++ : acumulado[actual] = 1; return acumulado; }, {});
    let numeroMasRepetido;
    let mayor = -1;
    for (const num in list) {
        if (list[num] > mayor) {
            mayor = list[num];
            numeroMasRepetido = num;
        }
    }
    return "El numero mas Repetido es: " + numeroMasRepetido;
}
// console.log(numeroMasRepetido([3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 22, 22, 2, 2, 2, 2, 2]));

// Ejercicios # 14

function cadenaEnMayusculas(cadena) {
    return cadena.toUpperCase();
}

// Ejercicios # 15

function promedioArregloNumeros(list) {
    return "Promedio: " + (list.reduce((acumulado, actual) => acumulado + actual) / list.length);
}

// Ejercicios # 16

function numeroMasPequenio(list) {
    return list.reduce((acumulado, actual) => acumulado < actual ? acumulado : actual);
}

// Ejercicios # 17

function eliminarElementosRepetidos(list) {
    return [...new Set(list)];
}
// console.log(eliminarElementosRepetidos([2, 3, 4, 3, 3, 3, 2, 2, 4, 4]));

// Ejercicios # 18

function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}
// console.log(invertirCadena('Esto es una cadena'));

// Ejercicios # 19

function encontrarPosicion(list, element) {
    return list.findIndex(li => li == element);
}
// console.log(encontrarPosicion([7, 2, 34, 6, 1, 4], 6));

// Ejercicios # 20

function convertirFormatoMoneda(numero) {
    return numero.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
// console.log(convertirFormatoMoneda(1500));

// Ejercicios # 21

function numeroMasGrandeYPequeño(list) {
    return [list.reduce((acc, val) => acc < val ? acc : val), list.reduce((acc, val) => acc > val ? acc : val)]
}
// console.log(numeroMasGrandeYPequeño([2, 6, 4, 2, 5, 6, 7, 10, 123]));