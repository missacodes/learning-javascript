let variable = document.getElementById("stone");
let randomNumber = Math.floor(Math.random()*9)+1;
if (randomNumber === 1)
{
    variable.style.backgroundColor = "red";
}
else if (randomNumber === 2)
{
    variable.style.backgroundColor = "orange";
}
else if (randomNumber === 3)
{
    variable.style.backgroundColor = "yellow";
}
else if (randomNumber === 4)
{
    variable.style.backgroundColor = "green";
}
else if (randomNumber === 5)
{
    variable.style.backgroundColor = "blue";
}
else if (randomNumber === 6)
{
    variable.style.backgroundColor = "#4169e1";
}
else if (randomNumber === 7)
{
    variable.style.backgroundColor = "#00008b";
}
else if (randomNumber === 8)
{
    variable.style.backgroundColor = "purple";
}
else {

    variable.style.backgroundColor = "black";
}