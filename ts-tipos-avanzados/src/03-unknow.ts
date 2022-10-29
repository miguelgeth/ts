
let anyVar: any;
anyVar = true
anyVar = undefined
anyVar = 2
anyVar = 'hola'

let isNew:boolean = anyVar;// nos pide un boolean pero le pasasmo la var anyVar porque esta puede ser cualquier cosa, entonces es peligroso porque si me pide boole le pudo pasar un number con any
anyVar.doSomething();// me deja invetar las mierdas ex
anyVar.toFixed();// pongo cualquier cosa y funciona

//ESTA ES LA MEJORA DE ANY


let unknowVar: unknown;
unknowVar = true
unknowVar = {}
unknowVar = []
unknowVar = undefined
unknowVar = 2
unknowVar= 'hola'
// unknowVar.doSomething();// no me deja meter cualquier mierda
if(typeof unknowVar === 'string') {

  unknowVar.toUpperCase();// tengo que verificar
}
if(typeof unknowVar === 'boolean') {
  let isNeww: boolean = unknowVar// tengo que verificar

}


const parse = (str: string):unknown => {
  return JSON.parse(str);// pasar a JSON
}


