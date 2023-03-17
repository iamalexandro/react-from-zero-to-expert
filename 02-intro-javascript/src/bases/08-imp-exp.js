import heroes, { owners } from "../data/heroes";

// console.log(heroes);
console.log(owners);

const getHeroeById = (id) => {
  return heroes.find((e) => e.id === id).name;
};

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => {
  return heroes.filter((e) => e.owner === owner);
};

console.log(getHeroesByOwner("DC"));
