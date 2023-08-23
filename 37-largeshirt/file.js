"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_longmedshirt() {
    let defaultmsg = "I  love Typescript";
    console.log(`Large Shirts \n ${defaultmsg} `);
    console.log(`Medium Shirts \n ${defaultmsg} `);
}
make_longmedshirt();
function make_shirtanysize(size) {
    console.log(`Shirt of size ${size} \n Have a Good Day `);
}
make_shirtanysize(30);
