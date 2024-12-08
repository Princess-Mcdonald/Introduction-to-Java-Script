


// Assignment
// Write the names of all the student in SS1---3 in an array for each class
// -- Print them out in the console using for loop.
// --For each class creat an object for one student in each class.

//  Answer1
const classOfSS1 = ["Joy", "James", "Precious", "Obinna", "Emeka", "Praise", "Angel", "Mike" , "Great", "Divine"]
const classOfSS2 = ["Hannah", "Favour", "David", "Charity", "Destiny", "Elvis", "Aby", "Zara", "Richard", "Nandy" ]
const classOfSS3 = ["zed", "Kella", "Alexzandar", "Jade", "Jacob", "Savy", "Nnamdi","Ejiro", "Oluchi", "Delight"]

for(let u = 0; u < classOfSS1.length; u++ )
console.log(classOfSS1[u])

for(let u = 0; u < classOfSS2.length; u++ )
console.log(classOfSS2[u])

for(let u = 0; u < classOfSS3.length; u++ )
console.log(classOfSS3[u])


const firstSS1Student ={
     firstName: "Joy",
    surName: "Paul",
    age: 15,
    position: "Fourth",
}

const str = `The detials of the first Student of SS1 class are ${firstSS1Student.firstName} ${firstSS1Student.surName}, She is ${firstSS1Student.age}, and she came ${firstSS1Student.position}.`
console.log(str)

const firstSS2Student ={
    firstName: "Hannah",
   surName: "Rowland",
   age: 15,
   position: "First",
}
const stri = `The detials of the first Student of SS2 class are ${firstSS2Student.firstName} ${firstSS2Student.surName}, She is ${firstSS2Student.age}, and she came ${firstSS2Student.position}.`
console.log(str)

const firstSS3Student ={
    firstName: "Zed",
   surName: "James",
   age: 15,
   position: "First",
}
const strin = `The detials of the first Student of SS3 class are ${firstSS3Student.firstName} ${firstSS3Student.surName}, He is ${firstSS3Student.age}, and He came ${firstSS3Student.position}.`
console.log(strin)
    
    

// const names = ["Icheka", "Princess", "Aaron"]
// const scores = [30, 40, 50]

// for (let i = 0; i < names.length; i++) {
//     let score = scores[i]
//     score += 20
//     scores[i] = score
// }

// console.log(scores)

// const names = ["Icheka", "Princess", "Aaron"]
// const scores = [30, 40, 50]

// for (let i = 0; i < names.length; i++) {
//     let score = scores[i]
//     let name = names[i]
    
//     if (name === "Icheka") {
//         score += 10
//     } else if (name === "Princess") {
//         score += 15
//     } else {
//         score += 100
//     }
    
//     scores[i] = score
// }

// console.log(scores)


// const names = ["Icheka", "Princess", "Aaron"]
// const scores = [30, 40, 50]

// for (let i = 0; i < names.length; i++) {
//     let score = scores[i]
//     let name = names[i]
    
//     switch(name) {
//         case "Icheka":
//             score += 10
//             break
//         case "Princess":
//             score += 15
//             break
//         default:
//             score += 100
//     }
    
//     scores[i] = score
// }

// console.log(scores)

// const names = ["Icheka", "Princess", "Aaron"]
// const scores = [30, 40, 50]
// let i = 0

// while (i < names.length) {
//     let score = scores[i]
//     let name = names[i]
    
//     switch(name) {
//         case "Icheka":
//             score += 10
//             break
//         case "Princess":
//             score += 15
//             break
//         default:
//             score += 100
//     }
    
//     scores[i] = score
//     i++
// }

// console.log(scores)

//  Answer to the new assignment
// const names = ["David", "Great", "Elvis", "Destiny", "Princess", "Favour"]
// const scores = [50, 79, 40, 83, 46, 68]

// for(let i = 0; i < names.length; i++){
//     let score = scores[i]
//     score = score + 10
//     scores[i] = score
// }
// console.log(scores)


// const names = ["David", "Great", "Elvis", "Destiny", "Princess", "Favour"]
// const scores = [50, 79, 40, 83, 46, 68]
// for (let i = 0; i < names.length; i++) {
//     let score = scores[i]
//     let name = names[i]
    
//     if (name === "David") {
//         score += 30
//     } else if (name === "Great") {
//         score += 5
//     } else if(name === "Elvis") {
//         score += 10
//     } else if (name === "Princess"){
//         score += 48
//     } else {
//         score += 26
//     }
    
//     scores[i] = score
// }

// console.log(scores)

// Another method of answering

const names = ["David", "Great", "Elvis", "Destiny", "Princess", "Favour"]
const scores = [50, 79, 40, 83, 46, 68]

// function addTen(){
//     for(let x = 0; x < scores.length; x++ ){
//         console.log((scores[x] + 10))
//     }
// }
// addTen()

// let newScores =[]

// function addTen(){
// for(let x = 0; x < scores.length; x++ ){

//     const score = scores[x] + 10
//     newScores.push(score)
// }
// console.log(newScores)
// }
// addTen()


// or
// function addTen(){
//     for(let x = 0; x < scores.length; x++ ){
    
//        newNumbers.push( numbers[x] + 10)   
//  }   


// let newScores =[]

// function addValues (){
//     for (let a = 0; a < names.length; a++){
//         if(names[a] =="David"){
//             newScores.push(numbers[0] + 10)
//         }else if(names[a] == "Great"){
//             newScores.push(numbers[1] + 15)
//         }else if(names[a] == "Elvis"){
//             newScores.push(numbers[2] + 25)
//         }else if(names[a] == "Destiny"){
//             newScores.push(numbers[3] + 30)
//         }else if(names[a] == "Princess"){
//             newScores.push(numbers[2] + 35) 
//         }else {
//             newScores.push(numbers + 40)
//         }       
//     }
//   console.log(newScores)
// }
// addValues()

const data = [
    {
        name: "David Sampson",
        score: 40,
        gender: "male",
        location: "Port Harcourt",
        course: ["Eng", "Math", "Phy"],
        address: {
            city: "PH",
            country: "Nigeria"
        }
    }, 
    {
        name: "Elvis Chizoba",
        score: 49,
        gender: "male",
        location: "Warri",
        course: ["Eng", "Math", "Chem"],
        address: {
            city: "Warri",
            country: "Nigeria"
        }
    }, 
    {
        name: "Great Fred",
        score: 60,
        gender: "female",
        location: "Owerri",
        course: ["Eng", "Math", "Biology"],
        address: {
            city: "Imo",
            country: "Nigeria"
        }
    }
]
// FOR EACH
data.forEach((each, index)=>{
    console.log(each.name)
})

data.forEach((student, index)=>{
    console.log(student.location)
})

data.forEach((student, index)=>{
    console.log(student.course[1])
})
data.forEach((student, index)=>{
  console.log( 
    `The name of the student ${student.name}, and score is ${student.score}`
)
})


// MAP
const result = data.map((each, idx)=>{
    // return each.name
    // return `Name: ${each.name}, Score: ${each.score}`
    return {name: each.name, score: each.score}
})
console.log(result)

// DATA FILTER 
// const response = data.filter((each, idx)=>{
//     // return each.score > 50
//     return each.location !== "Owerri"
// })
// console.log(response)

// const getDataFromDb = ()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=> response.json())
//     .then((result)=> console.log(result))
// }
// getDataFromDb()

// return only names from new data
const getDataFromDbj = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then ((result)=>{

        const names = result.map((each, idx)=>{
             return each.name
       })
        console.log(names)
})
}
getDataFromDbj()



//  return all todos
// return the todos user id and titles
//  return were completed is equal to false
