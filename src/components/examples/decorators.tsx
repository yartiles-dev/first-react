import React from "react";

class Printer {
    constructor(public message: string) {}
    showMessage(){
        console.log(this.message)
    }
}

const p = new Printer('Yuniet')

const button = document.querySelector('button')! // Esta manera es pa guardar el valor de algo si existe sino almacena null
button.addEventListener('click', p.showMessage.bind(p))

const App = () =>{
    return (
        <div>
            Hola
        </div>
    );
}

export default App