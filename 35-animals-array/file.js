"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal_list = ["rabbit", "goat", "sheep", "camel"];
for (let i = 0; i < animal_list.length; i++) {
    console.log(animal_list[i]);
    console.log(`I like ${animal_list[i]}`);
    if (animal_list[i] == "goat") {
        console.log('less harmful animal');
    }
    else if (animal_list[i] == "camel") {
        console.log('ancient people love to travel for long distances');
    }
}
console.log(`sheep  is a friendly animal children love it`);
