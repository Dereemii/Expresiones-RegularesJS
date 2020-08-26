var expresion = /hola/ig; //expresión hola

// i para validar insensitive, si no la tiene valida exacto
// g devuelve la cantidad de palabras que coincidan
// Match: devuelve un array con todas las coincidencias

var palabra = "hOla ke tal hola hablame Holas"; //validará falso

console.log("expresion =>", expresion.test("palabra"));
console.log("match =>", palabra.match(expresion))

var palabra2 = "aaa Hola\n mundo\nhola aaa"
/* alert(palabra2) --> genera múltilinea */

//n: realiza un salto de linea
// m: evalua multilinea

var expresion2 = /hola$/igm; // es true
console.log("expresion2 =>", expresion2.test(palabra2));
//test: retorna true o false, si cumple o no la condición
// ^: empieza con
// $ : termina termina con

console.log("match expresion2 =>", palabra2.match(expresion2));

//corchetes: lo que va dentro es opcional, debe estar "a" "b" o "c"
var expresion3 = /[abc]hola/;
console.log("expresion3 =>", expresion3.test("nabhola"));

//excluyendo
var expresion4 = /[^abc]hola/i;
console.log("expresion4 =>", expresion4.test("zhola"));

//Incluir letras a -z y A-Z
var expresion5 = /[a-zA-Z]/g; // si le coloco "g" matchea 1 por 1 /^[a-zA-Z]$/g (exacto y excluya)

var palabrilla = "H"
console.log("expresion5 =>", expresion5.test("palabrilla")); //retorna falso sin son solo numeros
console.log("match expresion5 =>", palabrilla.match(expresion5));

//NUMEROS
var expresion6 = /^\d+$/gm;
var numero = "123456789731";
console.log("expresion6 =>", expresion6.test(numero));
console.log("match expresion6 =>", numero.match(expresion6));

//metacaracter \d --> numero entero entre 0 y 9
// documentación: https://www.w3schools.com/jsref/jsref_obj_regexp.asp

var expresion7 = /^\D+$/gm;
var numero = "HOLA";
console.log("expresion7 =>", expresion7.test("numero"));
console.log("match expresion7 =>", numero.match(expresion7));

//metacaracter \D omito los digitos

// Telefono
// +56 9 987654345

var expresion8 = /^[+]d{2}\s\d\s\d{8}$/;  //{2} las veces que se repite el digito
console.log(expresion8.test("expresion8 =>", expresion8.test("+56 9 987654345")));

//correo
// mi correo@dominio.cl leslie@gmail.com

var expresion9 =  /^\w+\w+[@]\w+\.\D{2,3}$/;
console.log("expresion9 =>", expresion9.test("micorreo@gmail.com"))

// + : evalua muchas veces


