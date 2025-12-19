let rock = 0;
let paper = 1;
let scissors = 2;
const randomNumber = Math.floor((Math.random()*3));
if (randomNumber == rock)
{console.log('Player Picked: Rock');}
else if (randomNumber == paper)
{console.log('Player Picked: Paper');}
else if (randomNumber == scissors)
{console.log('Player Picked: Scissors');}
const randomNumber2 = Math.floor((Math.random()*3));
if (randomNumber2 == rock)
{console.log('Computer Picked: Rock');}
else if (randomNumber2 == paper)
{console.log('Computer Picked: Paper');}
else if (randomNumber2 == scissors)
{console.log('Computer Picked: Scissors');}

if (randomNumber == rock && randomNumber2 == scissors)
{console.log('The player won');}
if (randomNumber == rock && randomNumber2 == rock)
{console.log('It was a draw');}
if (randomNumber == rock && randomNumber2 == paper)
{console.log('The computer won');}
if (randomNumber == paper && randomNumber2 == scissors)
{console.log('The computer won');}
if (randomNumber == paper && randomNumber2 == rock)
{console.log('The player won');}
if (randomNumber == paper && randomNumber2 == paper)
{console.log('It was a draw');}
if (randomNumber == scissors && randomNumber2 == scissors)
{console.log('It was a draw');}
if (randomNumber == scissors && randomNumber2 == rock)
{console.log('The computer won');}
if (randomNumber == scissors && randomNumber2 == paper)
{console.log('The player won');}