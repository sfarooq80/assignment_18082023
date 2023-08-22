"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let users = ['admin', 'kashif', 'umer', 'talha', 'mehmood'];
for (let i = 0; i < users.length; i++) {
    if (users[i] == "admin") {
        console.log(`welcome administrator with all previliages`);
    }
    else {
        console.log(`Hello ${users[i]}`);
    }
}
