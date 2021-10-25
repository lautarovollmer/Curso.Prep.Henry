// funciones Callbacks:

// Estas funciones pueden llamarse en cualquier momento y pasar argumentos dentro de la función. 
// Pronto descubriremos por qué las devoluciones de llamada son tan importantes para Javascript. 
// La convención es usar cb como argumento para la variable que se usará de callback.

function decirHolaAlUsuario(usuario) {
    return 'Hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario) {
    return 'Adiós ' + usuario + '!';
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}

crearSaludo('Dan', decirHolaAlUsuario); // 'Hello Dan!'
crearSaludo('Dan', decirAdiosAlUsuario); // 'Goodbye Dan!'

// .forEach:

// Es un bucle for integrado en cada array. 
// .forEach toma un callback como su único argumento, e itera sobre cada elemento de la matriz y llama al callback en él.
// El callback puede tomar dos argumentos, el primero es el elemento en sí, el segundo es el índice del elemento (este argumento es opcional).

const autos = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

// Podemos escribir el callback en los paréntesis como una función anónima
autos.forEach(function(elemento, indice) {
    console.log(elemento);
});

// .reduce:

// Ejecutará un bucle en nuestra matriz con la intención de reducir cada elemento en un elemento que se devuelve. 
// Como es el primer argumento, acepta un callback que toma dos argumentos, primero un ‘acumulador’ (el resultado del método de reducción hasta ahora), y el segundo es el elemento en el que se encuentra actualmente. 
// El callback debe contener siempre una declaración de devolución (“return”).

// .map:

// .map se usa cuando queremos cambiar cada elemento de una matriz de la misma manera. 
// .map toma una devolución de llamada como único argumento. Al igual que el método .forEach, el callback tiene el elemento y el índice de argumentos opcionales. 
// A diferencia de .reduce, .map devolverá toda la matriz.