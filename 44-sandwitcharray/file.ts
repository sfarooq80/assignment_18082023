// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


var names:string[] = ['a','b','c','d'] ;
var ordered:string='';
function person_wants_sandwitch(total_orders:string[]){

    for(let i=0; i<2;i++){
        ordered = ordered+`\n`+names[i]+ " Ordered sandwitches ";
    }
    return ordered
}

var orders = person_wants_sandwitch(names);
console.log(orders);