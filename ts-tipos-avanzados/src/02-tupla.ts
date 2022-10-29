const prices:(number | string)[] = [12,4,4,'adfa'];// asi definimos un arrya
prices.push('asdfad')
prices.push(5)
console.log(prices);

// REACCT HOOKS USESTATE USA TUPLAS
// TUPLA es un array fuertemente tipado
const user:[string, number] = ['miguel', 20]// arriba el ordern puede ser aleatorio aca tieen que se como lo ESPECIFIQUE
user.push(2)
console.log(user);

// EJEMPLO
let user2: [string,number];
// user2 = [2, 'miguel']
user2 = ['miguel',2]// si ven aca si deja arriba nos dice el error

//esto es un destructuring de una tupla
const [username, age] = user;
console.log(username);// me trae solo el username



