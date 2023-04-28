// Ejercicios # 1

function promedioArregloNumeros(list) {
    return (list.reduce((acc, val) => acc + val)) / list.length;
}

// Ejercicios # 2

function stringMasLargo(list) {
    return list.reduce((acc, val) => acc.length > val.length ? acc : val);
}
// console.log(stringMasLargo(['Hola', 'que', 'estas', 'haciendo']));

// Ejercicios # 3

function esPrimo(numero) {
    if (numero <= 1) {
        return 'No es Primo';
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return 'No es Primo';
        }
    }
    return 'Es primo';
}
// console.log(esPrimo(4));

// Ejercicios # 4

function objetoMaximoValor(list, propiedad) {
    if (list.length === 0) { return null; }
    return list.reduce((acc, val) => {
        if (acc[propiedad] > val[propiedad]) {
            return acc;
        } else {
            return val;
        }
    });
}
// const personas = [
//     { nombre: 'Juan', edad: 25 },
//     { nombre: 'María', edad: 30 },
//     { nombre: 'Pedro', edad: 28 },
//     { nombre: 'Ana', edad: 35 }
// ];
// console.log(objetoMaximoValor(personas, 'edad'));

// Ejercicios # 5

function eliminarElemento(list, elemento) {
    return list.filter(item => !elemento.includes(item));
}
// const numeros = [1, 2, 3, 4, 5];
// const elementosAEliminar = [2, 4];
// console.log(eliminarElemento(numeros, elementosAEliminar));

// Ejercicios # 6

function factorialN(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
// console.log(factorialN(3));

// Ejercicios # 7

function raizCuadrada(numero) {
    return Math.sqrt(numero);
}
// console.log(raizCuadrada(4));

// Ejercicios # 8

function contadorLetra(cadena, letra) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === letra) {
            contador++;
        }
    }
    return contador;
}
// console.log(contadorLetra("Hola que tal como esta todos", 'o'));

// Ejercicios # 9
// Se pueden compara de muhcas maneras, los datos pero tambien los tamaños

function diferenciaEntreArreglosTamaños(list1, list2) {
    return list1.length == list2.length ? true : false;
}

function diferenciaEntreDatos(list1, list2) {
    if (!diferenciaEntreArreglosTamaños(list1, list2)) {
        return 'No Son Iguales';
    }
    for (let i = 0; i < list1.length; i++) {
        if (!(list1.includes(list2[i]) && list2.includes(list1[i]))) {
            return 'No Son Iguales';
        }
    }
    return 'Son Iguales';
}
// console.log(diferenciaEntreDatos([1, 2, 3, 4], [1, 3, 3, 4]));

// Ejercicios # 10

// Ejercicios # 11

// Ejercicios # 12

// Ejercicios # 13

// Ejercicios # 14

// Ejercicios # 15

// Ejercicios # 16

// Ejercicios # 17

// Ejercicios # 18

// Ejercicios # 19

// Ejercicios # 20

// Ejercicios # 21

// Ejercicios # 22

// Ejercicios # 23

// Ejercicios # 24
