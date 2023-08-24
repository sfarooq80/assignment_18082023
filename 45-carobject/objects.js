"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
let car = {
    name: "swift",
    manafucturer: "suzuki",
    model: 2010
};
function abc(Cars) {
    var carprop = {
        name: car.name,
        company: car.manafucturer,
        color: "blue"
    };
    return carprop;
}
var ret = abc(car);
console.log(ret);
