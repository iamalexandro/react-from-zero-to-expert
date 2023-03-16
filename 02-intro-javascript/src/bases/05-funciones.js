// Funciones en JS

//Note:Al englobar nuestras funciones en constantes evitaremos
//reasignaciones a nuestras funciones por  cualquier valo que no
//sea una funcion, y en caso de hacerlo tendriamos un error.
// saludar = 30;

//Funcion comun
const saludar = function saludar(nombre) {
  return `Hola, ${nombre}`;
};
// Arrow Function (most used)
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;
// console.log(saludar("Nicola"));

console.log(saludar2("Nicola"));
console.log(saludar3("Santi"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "ABC123",
    username: "El_papi502",
  };
};

console.log(getUser());

//Tarea
// 1. Transformen a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

function getActiveUser(name) {
  return {
    uid: "ABC123",
    username: name,
  };
}

const activeUser = getActiveUser("Nico");

console.log("Tarea");

//arrow function ✅
const getActiveUser2 = (name) => {
  return {
    uid: "ABC123",
    username: name,
  };
};

const activeUser2 = getActiveUser2("Susy");
console.log(activeUser2);

//return an implicit object ✅
const getActiveUser3 = (name) => ({
  uid: "ABC123",
  username: name,
});

const activeUser3 = getActiveUser3("Santi");
console.log(activeUser3);
