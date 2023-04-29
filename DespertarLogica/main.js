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

// este ejercicios esta repetido, lo puedes encontrar en el primero de este archivo main.js

// Ejercicios # 11

const matriz = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 2],
    [10, 11, 12, 13, 54, 7]
]

function mayorMenor(matriz) {
    let minimo = matriz[0][0];
    let maximo = matriz[0][0];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maximo) {
                maximo = matriz[i][j];
            }
            if (matriz[i][j] < minimo) {
                minimo = matriz[i][j];
            }
        }
    }
    return "Maximo: " + maximo + "\n" +
        "Minimo: " + minimo;
}
// console.log(mayorMenor(matriz));

// Ejercicios # 12

const objeto = { clave1: "valor1", clave2: "valor2", clave3: "valor1", clave4: "valor3", clave5: "valor2" };
function eliminarDuplicadoObjetos(objeto) {
    const valoresUnicos = [...new Set(Object.values(objeto))];
    const objetoSinDuplicado = {};
    for (const clave in objeto) {
        const valor = objeto[clave];
        if (valoresUnicos.includes(valor)) {
            objetoSinDuplicado[clave] = valor;
            valoresUnicos.splice(valoresUnicos.indexOf(valor), 1);
        }
    }
    return objetoSinDuplicado;
}
// eliminarDuplicadoObjetos(objeto);

// Ejercicios # 13

function ordenarMatrizDesc(matriz) {
    let arregloUnico = matriz.reduce((acc, val) => acc.concat(val), []);
    arregloUnico.sort((a, b) => b - a);
    const matrizOrdenada = [];
    for (let i = 0; i < matriz.length; i++) {
        const filaOrdenada = arregloUnico.splice(0, matriz[i].length);
        matrizOrdenada.push(filaOrdenada);
    }
    return matrizOrdenada;
}
// ordenarMatrizDesc(matriz);

// Ejercicios # 14

function formatoTitulo(cadena) {
    return cadena.toLowerCase().split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
}
// console.log(formatoTitulo("ready player One"));

// Ejercicios # 15

function numeroDePalabrasCadena(cadena) {
    return cadena.split(" ").length;
}
// console.log(numeroDePalabrasCadena("ready player Two, si no estoy mal esto es una prueba"));

// Ejercicios # 16

const arregloObjetos = [
    { valor: 5, valor2: 10 },
    { valor: 10, valor2: 11 },
    { valor: 2, valor2: 12 },
    { valor: 3, valor2: 13 },
    { valor: 6, valor2: 15 },
    { valor: 7, valor2: 16 },
]

function sumarPropiedadObjeto(list, propiedad) {
    return list.map(objeto => propiedad in objeto ? objeto[propiedad] : 0).reduce((acc, val) => acc + val);
}
// console.log(sumarPropiedadObjeto(arregloObjetos, 'valor'));

// Ejercicios # 17

function valorMaximoPropiedadObjeto(list, propiedad) {
    return list.map(objeto => propiedad in objeto ? objeto[propiedad] : 0).reduce((acc, val) => acc > val ? acc : val);
}
// console.log(valorMaximoPropiedadObjeto(arregloObjetos, 'valor2'));

// Ejercicios # 18



// Ejercicios # 19

// Ejercicios # 20

// Ejercicios # 21

// Ejercicios # 22

// Ejercicios # 23

// Ejercicios # 24
