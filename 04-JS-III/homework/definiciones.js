// Arrays:

// Podemos pensar en los arreglos como contenedores de almacenamiento para colecciones de datos. 
// Construir un arreglo es simple, declarar una variable y establecerla en []. 
// Luego podemos agregar al contenedor (separadas por coma) tantas cadenas, números o booleanos como queramos y acceder a esos elementos cuando lo deseemos.

const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

// Al igual que la cadena .length cuenta los caracteres, la matriz .length devolverá el número de elementos en una matriz:

const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

console.log(nombresEstudiantes.length);  // 4

// Podemos acceder a un elemento de un arreglo en cualquier momento, solo necesitamos llamar al elemento por su posición en el arreglo. 
// Los elementos reciben una posición numérica (índice) de acuerdo con su ubicación en el arreglo, en orden. 
// El orden numérico de un arreglo SIEMPRE comienza en 0, por lo que el primer elemento está en el índice 0, el segundo en el índice 1, el tercero en el 2, y así sucesivamente.

/*const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];
                                0         1        2        3
                            
*/                               

// Otros dos métodos de matriz incorporados muy útiles son .push y .pop. Estos métodos se refieren a la adición y eliminación de elementos del arreglo después de su declaración inicial.

const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

nombresEstudiantes.push('Patricia');

console.log(nombresEstudiantes);  // ['Martin', 'Antonio', 'Sara', 'Samuel', 'Patricia']



const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

nombresEstudiantes.pop();

console.log(nombresEstudiantes);  // ['Martin', 'Antonio', 'Sara']

// La mayoría de las veces, los bucles for se utilizan para iterar sobre todos los elementos de un arreglo. 
//Usando la técnica de acceso al índice podemos acceder a cada elemento del arreglo. 
//Para hacer esto, usamos el método .length como punto de parada para el ciclo.

const nombresEstudiantes = ['Martin', 'Antonio', 'Sara', 'Samuel'];

for (let i = 0; i < nombresEstudiantes.length; i++) {
    console.log(nombresEstudiantes[i]);
}