// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let items:string[]=["Shaheer","zuhaib","shadab","waqas"];
items[2] = "Fahad";

console.log("I can invite only two people in dinner");
items.pop();
items.pop();

console.log(items);

for(let i=0;i<items.length; i++){
    console.log(`${items[i]} you are still invited` )
}

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
items.pop();
items.pop();

console.log(items + "an empty array");