const worldRivers = [
    "Nile River",
    "Amazon River",
    "Yangtze River",
    "Mississippi River ",
    "Danube River",
    "Yellow River",
    "Mekong River",
    "Zambezi River",
    "Thames River",
    "Congo River"
];
const shift = worldRivers.shift();
const pop = worldRivers.pop();
worldRivers.push("Yenisei River");
worldRivers.unshift("Orinoco River");
worldRivers.unshift("Colorado River");
console.log(worldRivers);