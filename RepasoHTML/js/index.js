//let var const
//const genera una constante
//var let genera una variable
//$scope = fragmento de código

//Ejemplo de $scope
function suma() {
    //$scope primero
    const numero = 2
    let numero2 = 4 //Tiene $scope y no genera error si se declara de una vez
    var numero3 = 4 //No es de tipo $scope, solo se puede declarar una vez
    function sumaSegunda() {
        //$scope segundo
        const numero = 3
        let numero2 = 4
        var numero3 = 4
    }
}

/*
Ejemplo de java
int edad;
String name, surname, lastname;

public int getEdad(){
    return this.edad;
}
*/

//Arrow function
//Version antigua
function suma(numero1, numero2) {
    return numero1 + numero2
}

//Casi pro
const suma = function (numero1, numero2) {
    return numero1 + numero2
}
//Arrow function tiene un return implitito
//Con return
const suma = (numero1, numero2) => {
    return numero1 + numero2
}
//En una sola linea
const suma = (numero1, numero2) => numero1 + numero2
//=> se conoce como lambda, pero el conjunto de la función es flecha

//template string
//``
const name = 'Erick'
const surname = 'Mireles'
const lastname = 'Merchant'
const fullname = name + ' ' + surname + ' ' + lastname
const fullname2 = `${name} ${surname} ${lastname}`

const person = {
    name: '',
    surname: '',
    lastname: null
}

    (() => {
        const name = person.name.toString()
        const name2 = `${person.name} ${person.lastname ? person.lastname : ''}`
    })()

//array
const roles = [1, 2, 3]
//list
const roles3 = {}
//arrayList
const roles2 = [
    {
        key: 'ADMIN',
        name: 'Super administrador'
    },
    {
        key: 'USER',
        name: 'Usuario'
    }
]
//const roles = [1,2,3,{name:'',surname:''}]

//Prototypes - para arreglos
//push, splice, indexOf, find, filter, map, foreach

roles.forEach((element,index) => {
    console.log(element.name);
})

//Destructuración de objetos
const person2 = {
    name: 'Erick',
    age: 24,
    address: {
        street: 'barona',
        number: 29
    }
}

console.log(person2.name);
console.log(person2.address.street);

(() => {
    const {name, address:{street}} = person2
    console.log(street);
})()