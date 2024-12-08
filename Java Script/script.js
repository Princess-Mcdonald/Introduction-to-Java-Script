console.log("first")

// Data types
// Strings
var pep = "5"
console.log(pep)

// Numbers
var pepper = 7
console.log(pepper)

//Boolean  
var peter = true
console.log(peter)

// Null no assignment operator
var mine = null
console.log(mine)

// undefined
var that

// we will use Const and let for this class

// const dd = 77
// const dd = 88
// console.log(dd)
// benefit of const and let is that they are scoped

const firstName = "David"

const lastName = "Sampson"

const locationn = "Port Harcourt"

// Properties of a a string.

console.log(firstName.length) 
//  Method
console.log(firstName.includes("D"))

// concatenation

const message = "My name is "  + firstName + " " + lastName + " I am from " + locationn

const messagee = `My name is ${firstName} ${lastName}. I am from ${locationn}`

console.log(messagee)

// define three variables and add them in a console.log

const maddienName = " Joy"

const age = 30

const isMarried = true

const identity = `Her maddien name is ${maddienName}. She is ${age} years old and She is really ${isMarried}.`
console.log(identity)

// Number data type

const a = 3

const b = 6

const c = 4

const d = 10

const answer = 2 * (a ** b) - 10 / d

console.log(answer)

//  classwork

const x = 2

const y = 3

const ans = (2 * (x + y )) / 3

console.log(ans)

// inbuilt arithmetic functions

const exampkle = Math.floor(Math.random() * 100)
// it can be floored (whole numbered) when you multiply a random number afyer floring you get a whole number 
// random generate random decimal numbers between 0 and 1
console.log(exampkle)

// example of Math.random and Math.floor
const yy = Math.random()
const xx = Math.floor(yy)
console.log(xx)


//  generate a random number for Q and R

const Q = Math.random()

const R = Math.random()

const anss =Math.floor (Q * R)

console.log(anss)


//  Assignment
// Any 5 Equations and display answer with string concatenation

// Number1
const e = 5
const f = 7
const answerr = ( 9 * (4 ** f) * 2)/e
const messaage = `The answer to the equation is: ${answerr}.`
console.log(messaage)

// Number2
const m = 5
const n = 7
const o = 9
const anns = ( m * n * o  )*4
const messaager = `The answer to the equation is: ${anns}.`
console.log(messaager)

// Number3
const u = 28
const v = 9
const solve = 45 * v -( u**2 ) 
const result = `The answer to the equation is: ${solve}.`
console.log(result)

// Number4
const i = 5
const j = 7
const k = 9
const solved = Math.floor(((i ** 7) * 6)/j * k)
const myResult = `The answer to the equation is: ${solved}.`
console.log(myResult)

// Number5
const g = 5
const h = 7
const l = 9
const solution = g * h * l
const output = `The answer to the equation is: ${solution}.`
console.log(output)


// ARRAYS
// const by ={
//     name: Joy,
//     age: 56,
//     resident: Rivers,
//     skills:[
//         Cooking, Dancing, Reading,123 
//     ]
//     
//         faith, Paul, Abel
//     }
    
// }

// Loops
// For
// While

// Steps in loopsare:
// When to start
// When to stop
// Increament

// Example
const ss1 = ["david", "Sampson" , "hhh"]
let s = 0
while( s < 3 ) {
    console.log("s")
    s++
}

// // For
// const ss2 =["Gosple", "Able", "Hope"]
// for(let f = 0; f <= 6; f++){
//     console.log(ss2[a])
// }




// Assignment
// Write the names of all the student in SS1---3 in an array for each class
// -- Print them out in the console using for loop.
// --For each class creat an object for one student in each class.

//  Answer1
// const classOfSS1 = ["Joy", "James", "Precious", "Obinna",]
// const classOfSS2 = ["Hannah", "Favour", "David", "Great", "Destiny", "Elvis" ]


// Conditionals
//  IF ELSE statement
const p = 15
if(p < 6){
    console.log("Good Morning")
} else{
    console.log("Good Afternoon")
} 

const ju = 15
if( ju < 6){
    console.log("Good Morning")
} else if(ju == 10){
    console.log("Good Afternoon")
} else{
    console.log("Good Evenning")
} 

