"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let items = ["Shaheer", "zuhaib", "shadab"];
items[2] = "Fahad";
for (let i = 0; i < items.length; i++) {
    console.log(`Hi ${items[i]} i would like to invite you for launch \n`);
}
