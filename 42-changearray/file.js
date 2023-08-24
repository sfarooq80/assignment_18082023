"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians_name = ['abc', 'def', 'ghi', 'jkl'];
function make_great(arrayname) {
    console.log(magicians_name);
    for (let i = 0; i < magicians_name.length; i++) {
        magicians_name[i] = "Great " + magicians_name[i];
    }
    console.log(magicians_name);
}
make_great(magicians_name);
