// Objetos:

// Los objetos y los arreglos son similares en ciertas cosas, y muy diferentes en otras. 
// Mientras que los array pueden contener múltiples elementos relacionados unos con otros, los objetos contienen mucha información sobre una sola cosa. 
// Los objetos se instancian usando llaves ({}).

const nuevoObjeto = {};

// Los objetos usan un concepto llamado pares de clave:valor. 
// La clave (key) es el identificador y el valor (value) es el valor que queremos guardar en esa clave.
// Los objetos pueden contener muchos pares de key-value, deben estar separados por una coma. 
// Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, aunque, varias claves pueden tener el mismo valor. 
// Los valores pueden ser cualquier tipo de dato de Javascript.

const user = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

// Podemos acceder a esos valores llamando al nombre del objeto y la clave.
// Con la notación de puntos podemos llamar al nombre del objeto, un punto y el nombre de la clave. Así como llamamos a la propiedad .length en una matriz

user.lovesJavascript; // true
user.username;        // juan.perez

// Para eliminar un propiedad se usa la palabra clave "delete".

const nuevoObjeto = {
    eliminarEstaPropiedad: true
};

delete nuevoObjeto.eliminarEstaPropiedad;

