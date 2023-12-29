//  let myAge = 24;
//  console.log(myAge);

// initialize the count as 0

// function increment() {
//     console.log("The button was clicked")
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
function increment(){
   count += 1
   countEl.textContent = count
  }
function save(){
    let totalCount = count + " - "
    saveEl.textContent += totalCount
    countEl.textContent = 0
    count = 0
}


// let username = "per"
// let message = "You have three new notifications"
// let messageToUser = message + " , " + username + "!"
// console.log(messageToUser)

// let name = "AmYn!"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + "  " + name
// console.log(myGreeting)
// string always wins between numbers
// console.log(4 + 5) //9
// console.log("2" + "4") // string as 24
// console.log("5" + 1) //string as 51
// console.log(100 + "100") //string as 100100

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Amyn"
// let greeting = "Welcome Back "
// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += " emoji"
