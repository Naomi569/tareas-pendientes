//Para comentarios de varias líneas es;
/**Comentarios largos
 * De varias líneas
 * Para poner '' alt+39
 * Para comprobar la conexión colocar
 * alert('hola desde un alert');
 */

//var apellido = "Naranjo"; era la antigua forma de nombrar una variable
let nombre = "Naomi";

const pi = 3.14;
//string nombre ="Juan";
//tipos de datos

//no definido
let noDefinido;
//Número
let cantidad = 50;
//Cadena de texto o String
let bebida = "agua";
//booleanos
let activo = true;

//Objetos
//Personas: nombre, apellido, edad, peso
let persona = {nombre: 'Naomi', apellido:'Sánchez', edad:18};
console.log(persona);
//Arrays colección
let personas = [
    {nombre: 'Alitzel', apellido: 'Sánchez', edad:23},
    {nombre: 'Nieves', apellido: 'Melchor', edad:30},
    {nombre: 'Marco', apellido: 'Pérez', edad:30}
];
console.log(personas);
console.log(personas[2]);

//Funciones
//Listado de instrucciones
function suma(a, b) {
    return a+b;
}
let resultado = suma(5, 3);
console.log(resultado);

// Operadores aritmeticos
let datoA = 10;
let datoB = 5;

// suma
let suma = datoA + datoB;
// resta
let resta = datoA - datoB;
// multiplicación 
let multip = datoA * datoB;
// división
let div = datoA / datoB;
// Modulo o residuo
let residuo = datoA % datoB;
// incremento
let incremento = datoA;
incremento++;
// decremento 
let decremento = datoA;
decremento --;
// *******************************
// operadores relacionales
// mayor que >
let mayorQue = datoA > datoB;
// menor que <
let menorQue = datoB < datoB;
// mayor o igual >=
let menorIgual = datoB <= datoB;
// igual que == 
let igual = datoA == datoB;
// diferente de !=
let diferenteDe = datoA != datoB;
// *********************************
// Operadores lógicos
// y &&
let and = (datoA < 10 && datoB > 10);
// or ||
let or = (datoA > 10 || datoB > 10);
// not !
let not= !(datoA < 10);
// ////////////////////////////////////
// Operadores de asignacion
// Asignación simple =
let dato1 = 60;
// summar y asignar +=
let masigual = 10;
masigual += datoA;
// Menos igual -=
let menosIgual= 10;
menosIgual -= datoB;
// Por 