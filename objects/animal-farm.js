const pig = {
    name: "Mud",
    type: "pig",
    age: 4,
    makeSound() {
        return this.name + " is a " + this.age + " year old " + this.type +" that goes oink oink";
    }
};
const sheep = {
    name: "Andy",
    type: "sheep",
    age: 2,
    makeSound (){
        return this.name + " is a " + this.age + " year old " + this.type +" that goes baa baa";
    }

}
const dog = {
    name: "Bubbles",
    type: "dog",
    age: 8,
    makeSound () {
        return this.name + " is a " + this.age + " year old " + this.type +" that goes woof woof";
    }

}

console.log(pig.makeSound());
console.log(sheep.makeSound());
console.log(dog.makeSound());