/* Variable: Una variable es una forma de almacenar el valor de algo para usar más tarde. 
Para crear una variable en JavaScript se utiliza la palabra var seguida de un espacio y el nombre de la variable, ademas de eso, podemos asignarle un valor con el sigo =
Existen 3 formas de declarar una variable:
     var nombre = 'Juan';  
     let apellido = 'Perez';
     const comidafavorita = 'Pizza';
*/

// Strings: Las strings son bloques de texto, siempre se definirán entre comillas, ya sea simple o doble. Cualquier texto entre comillas es una cadena o string.
 var nombrePerro = 'firulais';

// Funciones: 

//Són tipos particulares de Objetos, llamados objetos invocables, por lo que tienen las mismas propiedades que cualquier objeto.
// Una función comenzará con la palabra clave function, esto le dice a lo que sea que esté ejecutando tu programa que lo que sigue es una función y que debe tratarse como tal. Después de eso viene el nombre de la función. Luego viene un paréntesis abierto y uno cercano. Y finalmente, abra y cierre los corchetes. Entre estos corchetes es donde irá todo nuestro código a ejecutar.

function logHola() {
    console.log('hola!');
}

logHola();

// Si agregamos una variable a los paréntesis cuando declaramos la función, podemos usar esta variable dentro de nuestra función. Iniciamos el valor de esta variable pasándola a la función cuando la llamamos. Entonces en este caso nombre = 'Lautaro'


function logHola(nombre) {
    console.log( `Hola, ${nombre}`);
}

var miNombre = 'Antonio';
logHola(miNombre);

// Return:

// La declaración de retorno (“return”) es la única forma en que los datos escapan de una función. No se puede acceder a nada más que a lo que se devuelve fuera de la función. También hay que tener en cuenta que cuando una función golpea una declaración de retorno, la función detiene inmediatamente lo que está haciendo y “devuelve” lo especificado.

function dividirDosNumeros(a, b) {
    var producto = a / b;
    return producto;
  }

// Declaraciones if:

// Es una forma de que nuestra función verifique si algo es true, y ya sea ejecutando el código suministrado si es así o avanzando si no lo es.

function puedeManejar(edad) {
    if (edad > 18) {
        return true;
    }

    return false;
}

// Aquí estamos tomando un número (edad) y verificando si la declaración es true (22>18), lo es, por lo que devolveremos true, y la función se detendrá. Si no es así, omitirá ese código y la función devolverá false.

// Booleans:

// Es un concepto que alimenta el código binario y el núcleo de las computadoras.
// Esencialmente significa que tiene dos opciones, activar o desactivar, 0 o 1, verdadero o falso. En Javascript usamos booleanos para significar verdadero o falso.

