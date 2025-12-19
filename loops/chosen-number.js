const chosenNumber = 8;
let guess = Math.floor(Math.random()*10)+1;
while (guess != chosenNumber){
    guess = Math.floor(Math.random()*10)+1;
    console.log("Nope, it isn't ", guess);
}
console.log("My chosen number is", chosenNumber, "!");