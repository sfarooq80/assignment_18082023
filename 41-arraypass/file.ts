// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magicians_name:string[] = ['abc','def','ghi','jkl'] ;

function show_magicians(arrayname:string[]){
    console.log(magicians_name);

    for(let i=0; i<magicians_name.length;i++){
        console.log(magicians_name[i]);
    }
}

show_magicians(magicians_name)