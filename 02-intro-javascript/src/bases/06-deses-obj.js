//Desestructuracion
//Asignacion Desestructurante
const person = {
  name: "Tony",
  age: 27,
  key: "Ironman",
  range: "Senior",
};

// const { name, age, key } = person;

// console.log(name);
// console.log(age);
// console.log(key);

const returnPerson = ({ name, age, key, range = "Captain" }) => {
  // const { name, age, key } = person;
  // console.log(name, age, range);
  return {
    keyName: key,
    years: age,
    latlng: {
      lat: 14.2345,
      lng: -12.234,
    },
  };
};

const hero = returnPerson(person);

//extraccion de valores de objetos anidados
// const {
//   keyName,
//   years,
//   latlng: { lat, lng },
// } = hero;

//o por pasos separados para mayor orden y mejor lectura
const { keyName, years, latlng } = hero;
const { lat, lng } = latlng;

console.log(keyName, years);
console.log(lat);
console.log(lng);
