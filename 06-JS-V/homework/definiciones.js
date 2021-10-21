// Prototype:

// Las clases tienen una forma única de establecer un método una vez y dar acceso a cada objeto de esa clase a esos métodos. 
// Esto se llama el prototype. Cada clase tiene una propiedad prototype, que luego podemos establecer en métodos:

function Usuario(nombre, github) {
    this.nombre = nombre;
    this.github = github;
}

// Los métodos de prototype tienen acceso a la palabra clave this y, al igual que antes, siempre apuntará al objeto (a la izquierda del punto) que lo está llamando.

// Hasta ahora siempre que teníamos que crear un objeto nuevo declarábamos un object literal, pero vamos a ver que hay otros métodos que nos da el prototype de Object para cumplir esa tarea

// Constructores:

// El constructor del __proto__ esta ligado a Alumno y luego al Object Object de JS. 
// Pero el método saludar esta en el objeto prototype de Personas… , y esta perfecto, así es como debería funcionar, las instancias acceden al __proto__ que fue vinculado por el constructor para ver que métodos tienen. 
// Nuestro problema es que al llamar a Persona con call en vez de con el método new no se esta haciendo ese vinculo en el que Persona.prototype se mete en nuestro Prototype Chain, y entonces las instancias de Alumno no tienen acceso a los métodos de Persona


