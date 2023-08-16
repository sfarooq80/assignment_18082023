"use strict";
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let items = ["Shaheer", "zuhaib", "shadab"];
console.log(`${items[2]}shadab cant come in the party`);
items[2] = "Fahad";
// Print a second set of invitation messages, one for each person who is still in your list.
for (let i = 0; i < items.length; i++) {
    console.log(`Hi ${items[i]} i would like to invite you for launch \n`);
}
items.shift;
