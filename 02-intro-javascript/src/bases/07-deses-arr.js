const character = ["Naruto", "Sasuke", "Itachi"];
const [, , p3] = character;
// console.log(p3);

const returnArray = () => {
  return ["ABC", 123];
};

// console.log(returnArray());
const [letras, numeros] = returnArray();

// console.log(letras);
// console.log(numeros);

//Tarea
// 1. el primer valor del arr se llamara nombre
// 2. el segundo sera una funcion setNombre
console.log("Tarea");

// const usarEstado = (nombre, setNombre) => {
//   return [nombre, setNombre];
// };

// const setNombre = () => {
//   console.log("name setted");
// };

// const arr = usarEstado("Nicola", setNombre());

const usarEstado = (value) => {
  return [
    value,
    () => {
      console.log("name setted");
    },
  ];
};

const [nombre, setName] = usarEstado("Nico");
console.log(nombre);
setName();
