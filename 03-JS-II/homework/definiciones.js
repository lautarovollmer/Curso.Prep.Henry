/*for:

 Los bucles for tienen una sintaxis única, similar a la instrucción if, pero un poco más compleja. 
 Primero tenemos la palabra clave for, seguida de paréntesis y luego abrir y cerrar llaves. 
 Dentro de los paréntesis necesitaremos tres cosas. 
 Primero, debemos declarar una variable, esto es sobre lo que se repetirá el bucle. Entonces tendremos una expresión condicional, el ciclo continuará sucediendo hasta que esta declaración sea false. 
Tercero, incrementaremos nuestra variable. Las tres declaraciones están separadas por un punto y coma. */

for (let i = 0 ; i < 10 ; i++ ) {
    console.log(i);
}


/* &&, ||, !:

Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. 
En una declaración &&, si la primera expresión es false, la segunda expresión no se evaluará porque AMBAS expresiones deben ser true. 
Lo mismo para la declaración ||. Si la primera expresión es verdadero, la segunda no se evaluará porque solo debe haber una declaración verdadero para cumplir con los requisitos del operador. */
