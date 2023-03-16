const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 29621,
    lat: 14.33,
    lng: 34.16,
  },
};

console.log(persona);

//En este momento no estoy clonando si no usando
//una referencia de persona por tanto los cambios
//que haga en persona2 tambien se haran a persona
const persona2 = persona;
persona2.nombre = "Nico";

console.log(persona2);
console.log(persona);

//para evitar crear referencias y en lugar de eso
//clonar mi objeto persona o crear una instancia
//de dicho objeto utilizamos spread (...)
const persona3 = { ...persona };
persona3.nombre = "Frank";
console.log(persona3);
