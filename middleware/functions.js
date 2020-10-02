const Animal = require("../models/animal");

let functions = {};

functions.sayHello = function(){
    console.log("Hello world, I'm inside the functions")
}

functions.randomNumber = function() {
    number = Math.floor(100*Math.random())
    return number;
}

functions.getAnimals = async () => {
    return Animal.find({})
    .exec()
    .then((foundAnimals) => {
        if (foundAnimals.length === 0){
            foundAnimals = [{name:"perro"}, {name:"gato"}]
        }
        let randomAnimal = foundAnimals[Math.floor(Math.random() * foundAnimals.length)];
        return {randomAnimal: randomAnimal, foundAnimals:foundAnimals}
    })
    .catch((err) => {
        return "An error ocurred again!"
    });
}

functions.presentMomentGenerator = () => {
    let newMoment = new Date();
    const event = new Date('December 14, 2020 16:14:39');
    console.log("The eclipse is at: " + event.getTime());
    console.log("The moment is: " + newMoment);
    console.log("In miliseconds, it is: " + newMoment.getTime());
}

functions.cantStopMe = () => {
    console.log("HEEELLOOOOOO");
}

module.exports = functions;
