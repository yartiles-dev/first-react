import React from "react";

function generics<T extends object,U extends Array<number>> (a: T,b: U) {
    if(b.length === 1)
    return Object.assign(a,b)
}

const prueba = generics({a:'sdsdsd'},[1,2,3,4,5])
// console.log(prueba)

function secondGeneric<T extends object, U extends keyof T> (obj: T, key: U) {
    return obj[key]
}

// console.log('My name is ' + secondGeneric({name: 'Yuniet'}, 'name'))

class Generic<T>{
    private data:T[] = []

    addData(data: T){
        this.data.push(data)
    }
    removeData(data: T){
        (this.data.indexOf(data)=== -1) || this.data.splice(this.data.indexOf(data),1) //ESTA ES OTRA FORMA DE USAR EL OPERADOR TERNARIO Q NO HAY Q ESPECIFICAR UN SINO
    }
    getData(){
        return [...this.data]
    }
}

const instanceGeneric = new Generic<string>()
instanceGeneric.addData( 'Yuniet')
instanceGeneric.addData( 'Arletis')
instanceGeneric.addData( 'Oscar')
instanceGeneric.removeData( 'Arlets')
console.log(instanceGeneric.getData())

abstract class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div> Hello </div>;
    }
}

export default App;