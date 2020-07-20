import React from "react";

interface ultimo {
    // EL PRIMER TIPO DE DATO ES PA DECIR TUS ATRIBUTOS SI VAN A SER STRING O NUMBER Y EL SEGUNDO PA LOS VALORES
    [prop: string]: any,
    // name: string //ESTO ES PA DEFINIR ALGUNOS POR DEFECTO
}

//DE ESTA MANERA CREO UN OBJETO DEL TIPO DE ULTIMO
const instanceUltimo: ultimo = {
    name: 'Yuniet',
    apellido: 'Artiles',
    secondApellido: 98,
    pepe: true
}
delete instanceUltimo?.name// ESTO ES PARA ELIMINAR UNA ETIQUETA DE UN OBJETO
console.log(instanceUltimo)
// DE ESTA MANERA CREO UN OBJETO DEL TIPO DE ULTIMO el unico problema es q las etiquetas son numeros y no puedo acceder a ellas tan facil debe ser iterando
// const yuni2 = (...yunis): ultimo => yunis = {...yunis}
// console.log(yuni2('Yuniet', 'Artiles', 98, true))

/////////////////////
interface Employee {
    name: string
    startDate?: Date
}
interface Admin  {
    name: string
    privileges?: string[]
}

type Unknow = Employee | Admin
function PersonType(person: Unknow){
    // EL PROBLEMA ES Q SI UN OBJETO TIENE UNA ESTRUCTURA DEFINIDA HAY Q PREGUNTAR SI TIENE UNA PROPIEDAD Q NO TIENE DEFINIDA ES ITERANDO CON SPREAD OPERATOR
    // console.log(person.name, (person as Admin)?.privileges ?? (person as Employee)?.startDate ?? 'Ni uno ni otro')// ESTO ES UNA MANERA DE HACERLO
    console.log(person.name, {...person}?.privileges ?? {...person}?.startDate ?? 'Ni uno ni otro')// ESTO ES OTRA MANERA DE HACERLO
    //LA OTRA MANERA ES A BASE DE IF E INSTANCEOF, O FOR, O ('ATRIBUTO' IN OBJECT)
}

PersonType({name: 'Tony'})
PersonType({name: 'Tony', privileges: []})
PersonType({name: 'Tony', startDate: new Date()})

//INTERSECTION TYPES
type Type1 = string | number
type Type2 = number | string

type Universal = Type1 & Type2
const InstanceUniversal: Universal = 565

// type funcion = (a:number, b: number) => number
// CUANDO SE CREE UN CAMPO Q SEA UNA FUNCION PERO Q SEA OPTIONAL PA Q NO DE PROBLEMA C TIENE Q EMPEZAR
// POR CUANDO C INSTANCIE UNA VARIABLE DE TIPO INTERFAZ HACERLO UTILIZANDO PARTIAL Y LUEGO SI ESO
// LO IGUALO A UNA VARIABLE DEBE SER LET PQ CONST SIEMPRE TIENE Q TENER VALOR
interface funcion {
    a?: (a:number, b: number) => number //or
    // a?(a:number, b: number): number
    b?: string
}

const funcion1: Partial<funcion> = {}
funcion1.a = (a,b) => a + b
let bresult;
funcion1.b = bresult = 'Yuniet'
const aresult = funcion1.a(2,5)

// console.log(bresult, funcion1.b,aresult)
// console.log(funcion1(2,5)) // ESTO ES PARA CUANDO MI INTERFAZ ES TRATADA COMO FUNCION

//SE PUEDE HACER HERENCIA ENTRE INTERFACES

interface Greatable {
    name: string

    greet(phrase: string): void
}

class Person implements Greatable{
    name: string
    age = 30

    constructor(n:string) {
        this.name = n
    }

    greet(phrase: string) {
        // console.log(`Hi my name is ${phrase}`)
    }
}

const person2 = new Person('Pepe')
person2.greet('Yuniet')

const person1: Partial<Person> = {}
person1.greet = (phrase: string) => {
    console.log(`Hi my name is ${phrase}`)
}

// person1.greet('Yuniet')

abstract class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div> Hello </div>;
    }
}

export default App;