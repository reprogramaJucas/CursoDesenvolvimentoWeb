//  Segundo o ECMAScript

// >>> Primitive Values (Strings, Number, Boolean)

// STRING

// let names = "Emanuel";
// let age = 29
// console.log(typeof age)

// Funções construtoras para coverter tipo
// age = Number(age)
// age = String(age)

// console.log(typeof age)
// console.log(names);
// console.log(typeof names);

// console.log(age)
// console.log(typeof age)

// NUMBER (Integer, Float, NaN, Infinity)

// Concatenation
// let num1 = 8
// let num2 = "2"
// num2 = Number(num2)
// let soma = num1 + num2

// console.log(soma)
// console.log(typeof soma)



// >>> Variables Scope (Hoisting) <<<<

{
    let num = "Global"
    // const pi = 3.14
    // console.log(num)

    {
        let num = "Local"
        // console.log(num)
        // pi = 10
    }
    // console.log(pi)

    {

    }

    {

    }

    // console.log(num)
}


// Boolean (True or False)

// let Exp = 20 == 20
// let n1 = 20, n2 = 20 
// let n1 = "20", n2 = 20 
// let n1 = "Emanuel", n2 = 20 

// console.log(n1 == n2)
// console.log(n1 != n2)
// console.log(n1 === n2)
// console.log(n1 !== n2)


// >>>>> Template Strings (Interpolation) <<<<<

// let num1 = 30
// let num2 = 25
// let total = num1 + num2

// alert("Olá")
// console.log("Num1 = " + num1)
// console.log("A Soma de " + num1 + " e " + num2 + " é igual a " + total)

// console.log(`A soma de ${num1} e ${num2} é igual a ${total}`)
// alert(`A soma de ${num1} e ${num2} é igual a ${total}`)


// >>>>>> Type Structutal (Object, Functions) <<<<

// let name = "Emanuel"
// let age = 29
// let profission = "Web Developer"

person = {
    name: "Emanuel",
    age: 29,
    profession: "Web Developer" 
}

// console.log(name)
// console.log(age)
// console.log(profission)

// console.log(typeof person)
// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(`${person.name} tem ${person.age} anos e é ${person.profession}`)


// Array (Vetor)

// countries = ["Brasil", "Alemanha", "Espanha"]
// countries = ["Brasil", 5, "Alemanha", 4, "Espanha", 1]
countries = [
                ["Brasil", 5], 
                ["Alemanha", 4], 
                ["Espanha", 1]
            ]

// console.log(typeof countreis)
// console.log(countries)
// console.log(countries[2][1])

countries = [
                {
                    name: "Brasil", 
                    champions: 5
                }, 

                {
                    name: ["maça", "Banana", "Uva"], 
                    champions: 4
                }, 

                {
                    name: ["maça", "Banana", "Uva"], 
                    champions: 1
                }, 

                {
                    name: ["maça", "Banana", "Uva"], 
                    champions: 1
                },
            ]

let country = 3
console.log(`${countries[country].name} tem ${countries[country].champions} título(s)`)

console.log(countries[country])