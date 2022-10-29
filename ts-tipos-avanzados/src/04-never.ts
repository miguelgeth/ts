// never se usa con fn que nunca van a terminar pero podemos pensar en que una funcion no se llega a ejecutar

const withoutEnd = () => {// paso el mouse y ya me dice que es never
  while(true) {// creamos un ciclo infinito
    console.log('nunca pares de aprender');

  }
}
const fail = (message:string) => {// tambein es never si quier throw un erro
  throw new Error(message);
}

const example = (input:unknown) => {
  if(typeof input === 'string') {
    return true
  } else if (Array.isArray(input)) {// de esta manera nos damos de cuenta si es un array
    return 'es un array'
  }
  return fail('not match')
}
console.log(example('hola'));
console.log(example([12,2,]));
console.log(example(234));// no tenemos un number y termina todo
console.log('despues de fail');// yesto nunca sale



