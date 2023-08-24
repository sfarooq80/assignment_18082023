// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magicians_name:string[] = ['abc','def','ghi','jkl'] ;
var magicians_name_new:string[] = [] ;

function make_great(arrayname:string[]){
    // console.log(magicians_name);

    for(let i=0; i<magicians_name.length;i++){
        magicians_name_new.push("Great "+magicians_name[i]);
    }
    return magicians_name_new
}

let val = make_great(magicians_name)
// console.log(val);

for(let i=0; i<magicians_name.length;i++){
    console.log(magicians_name[i]);
    console.log(magicians_name_new[i]);
}