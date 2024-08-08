//  document.getElementById("counter-el").innerText = 5

//  let counter = 0;

//  console.log(counter);

// 1. Create a variable, myAge, and set it to your age

//  const myAge = 34;

// 2. Log the myAge variable to the console

//  console.log(myAge);

//  let firstBatch = 5;
//  let secondBatch = 7;

//  let count = firstBatch + secondBatch;
//  console.log(count);

//  let myAge = 35;
//  let humanDogRatio = 7;

//  let myDogAge = myAge * humanDogRatio;

//  console.log(myDogAge);

//  let bonusPoints = 50;
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function increment() {
//     console.log("The button was clicked")
// }

// function log() {
//     console.log(42);
// }
// log();

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }
// logLapTime();

// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// // 4
// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// // 5
// function save() {
// console.log(count)

// }

// save()

// 6
// let username = "Pearl"
// let message = "You have three new notifications";
// console.log(message + ", " username + "!");

// 7 

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// 8 
// let name = "Gospel Tigiri";
// let greeting = "Hi, my name is ";

// let myGreeting = "greeting + name";
// console.log(myGreeting);

// 10

// let welcomeEl = document.getElementById("welcome-el")

// let name2 = "Tigiri, Burabari Gospel";
// let greeting2 = "welcome back ";

// welcomeEl.innerText = greeting + name2;

// welcomeEl.innerText += ""

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
     count += 1
     countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}



