const nombre = "Nicola";
const apellido = "Di Candia";

// const nombreCompleto = nombre + " " + apellido;

const nombreCompleto = `
  ${nombre}
  ${apellido}
  ${1 + 1}

`;

// console.log(nombreCompleto);
// console.log(`${nombre} ${apellido}`);
console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola mundo " + nombre;
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`);
