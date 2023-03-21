import heroes from "../data/heroes";

// console.log(heroes);
// console.log(owners);

export const getHeroeById = (id) => {
  return heroes.find((e) => e.id === id);
};

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => {
  return heroes.filter((e) => e.owner === owner);
};

// console.log(getHeroesByOwner("DC"));
