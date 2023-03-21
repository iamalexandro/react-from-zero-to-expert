import { getHeroeById } from "../src/bases/08-imp-exp";

//Promises

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("Hello world");
//     const heroe = getHeroeById(2);
//     console.log(heroe);
//   }, 2000);
// });

// promise.then(() => {
//   console.log("then de la promesa");
// });

const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      heroe ? resolve(heroe) : reject("El heroe no existe en la lista");
    }, 2000);
  });
};

getHeroesByIdAsync(2)
  // .then((heroe) => console.log("Heroe: ", heroe))
  .then(console.log)
  // .catch((err) => console.warn(err));
  .catch(console.warn);
