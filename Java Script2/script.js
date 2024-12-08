// function

//  normal fuction
// function fff(){
//     console.log("First")
// }

// Arrow function
// const ujjj =()=>{
//     console.log("Second")
// }

function y(){
    const x = (10 - 5) * 25
    console.log(x)
}
y()
// class work

function work(){
    const newBal = 10 + 10
    return newBal
}

function mine(){
    const amount = work()
    const message = ` The price is ${amount}`
    console.log(message)
}
mine()


// class work 2

function us(newamount){
    const newBal = 10 + newamount
    return newBal
}

function we(number){
    const amount = us(number)
    const messagee = ` The price is ${amount}`
    console.log(messagee)
}
we(40)

// Example

const cutOff = 120

const numbers =[100, 102, 130, 140]

function checkValues (){
    for(let i = 0; x < numbers.length; i++){
        if(numbers[x] >= cutOff){
            console.log("Admitted")
        } else {
            console.log("Try again next year")
        }
    }
}
