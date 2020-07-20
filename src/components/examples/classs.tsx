import React from "react";

const modificarActualOrNew = (objectActual, propertyNews): any => {
    return {...objectActual, ...propertyNews}
}

//Siempre saber q cuando declaras una variable const no c le puede cambiar el valor pero en el caso de un objeto c le puede cambiar el valor de sus propiedades y a un array insertarle cosas sin problem

//static delante del nombre del metodo o de una propiedad es para acceder a metodos sin necesidad de instanciar una clase y no hace falta inicializar las propiedades
//abstract delante de una propiedad o de un metodo es para redefinir despues y tampoco hace falta inicializar las variables

//OPERARDOR TERNIARIO PARA DECLARAR VARIABLES CON CONDICIONES MUY TIZA
// var a = 11;
// var numeroObtenido = a == 5 ? ‘Cinco’ :
// a == 7 ? ‘Siete’:
// a == 11 ? ‘Once’:
// a == 15 ? ‘Quince’:
// 'Otro Número;
//
// console.log( numeroObtenido ); // Once

class LearnClass {
    id: number
    // private name: string
    //ESTO ES PARA ELIMINAR EL ERROR DE TYPO: IN WORD
    // noinspection SpellCheckingInspection
    apellido: string
    readonly ci: number

    getName = ():  string => {
        return this.name
    }

    setName = (name: string): void => {
        this.name = name
    }

//Las variables de una clase tambien c pueden declarar en el constructor

    constructor(apellido: string, protected name: string, ci: number, id:number) {
        this.apellido = apellido
        this.ci = ci
        this.name = 'Yuniet'
        this.id = id
    }
}

class SecondClass extends LearnClass{
    constructor() {
        super('Abascal', 'Arletis', 95111630701, 2);
    }
    prueba = (): void => {
        this.name = ''
    }
}

class ThirdClass {
    private static instance: ThirdClass

    static getInstance(): ThirdClass {
        return this.instance ?? (this.instance = new ThirdClass())
    }
}
//ESTO ES UNA PRUEBA PA PROBAR EL PATRON SINGLETON
const instanceThirClass: ThirdClass = ThirdClass.getInstance()
const instance3ThirClass: ThirdClass = ThirdClass.getInstance()
const instance4ThirClass: ThirdClass = ThirdClass.getInstance()
const instance5ThirClass: ThirdClass = ThirdClass.getInstance()
const instance6ThirClass: ThirdClass = ThirdClass.getInstance()
const instance7ThirClass: ThirdClass = ThirdClass.getInstance()
console.log(instance7ThirClass)

const SecondLearnClass = new SecondClass()

const primerMonster: {
    id: number,
    name?: string | null,
    email: string
} = {
    id: 1,
    name: null,
    email: "arlerrrr"
}

// const primerMonsterModificado = {...primerMonster, ...{id:2, name: "yuniet", email: "yuniettttttt"}}\

// function f(monster) {
//     return monster?.name ?? 'defaultName' or return monster && monster.name ? monster.name : 'defaultName'
// }

const jfjf: {
    name: {
        apellido?: {
            segundoApellido: string
        }
    }
} = {
    name: {
    }
}

//EL SIMBOLO DE ? ENTRE PROPIEDADES EN UN OBJETO ES PA IR VERIFICANDO Q EXISTA Y NO DE PALO
const pypypyp = jfjf?.name?.apellido?.segundoApellido ?? 'defaultName'
console.log(pypypyp)
const primerMonsterModificado = modificarActualOrNew(primerMonster, {name: primerMonster?.name ?? 'Yuniet',email: 'yartiles161195@gmail.com'})
// console.log(primerMonsterModificado)

// SecondClass.name = ''

const FirstLearnClass = new LearnClass('Artiles', 'Yuniet', 95111630701, 1)
// FirstLearnClass.name = ''
FirstLearnClass.setName('Arletis')
// console.log(FirstLearnClass.getName())
// FirstLearnClass.ci = 'Pepe'

//protected es entre las clases q tienen herencia asi los hijos pueden tocar las variables de los padres

const arr1: number[] = [1,2,3,4,5]
const arr2: number[] = [...arr1]

// console.log(r)

export interface monster {
    id: number;
    name: string;
    email: string;
}

export interface assign {
    apellido: string;
    animal: {
        name: string
    };
    aficiones: string;
}

const yuni: assign = {
    aficiones: 'dsf',
    animal: {
        name: 'chucho'
    },
    apellido: '4rtr'
}

const arrayYuni: monster[] = [
    {
        id: 1,
        name: "arle",
        email: "arlerrrr"
    },
    {
        id: 2,
        name: "pepe",
        email: "pepepeeeeeee"
    }
]

const arrayId = arrayYuni.map(yuni => yuni.id).reduce((acumulator, xposterior)=> acumulator + xposterior)
// console.log(arrayId)
// console.log(w)

const yuni2 = (...yunis: assign[]): assign[] => [...yunis]
// console.log(yuni2(yuni, yuni, yuni, yuni))

const {apellido:a,animal:{...b},aficiones:c} = yuni
b.name = 'swdf'
// console.log(a,yuni.animal.name,c,b.name)

const prueba2 = <Object1,Object2>(obj1: Object1, obj2: Object2) => {
    return Object.assign(obj1,obj2)
}

// console.log(prueba2({id : 2,
//     email :'',
//     name :''},
//     {
//         apellido: '',
//         animal:  '',
//         aficiones: ''
//     }))

const prueba = (monster: monster): monster => {
    const monsterCopied = {} as monster // or const monsterCopied: Partial<monster> = {}
    monsterCopied.id =2
    monsterCopied.email =''
    monsterCopied.name =''
    return monsterCopied             // or return monsterCopied as monster
}

//ESTO ES PARA REMPLAZAR UN OBJETO CON OTRO
// App.tercerExample = {...App.cuartoExample}
// console.log(App.tercerExample)

abstract class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div> Hello </div>;
    }
}

export default App;