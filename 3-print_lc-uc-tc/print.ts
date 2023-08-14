let str_1="WE are students of batch 49 PIAIC";
console.log(str_1.toLowerCase()); //lowercase
let str_2="we are students of batch 49 PIAIC"; 
console.log(str_2.toUpperCase()); //upercase
// let str_3="we are students of batch 49 PIAIC"; //titlecase
// console.log(str_3.toUpperCase()); //upercase
var str_3="WE ARE STUDENTS OF BATCH 49 PIAIC";


function titleCase(str:string){
    var split_str = str.toLowerCase().split(" ");
    for (var i =0; i<split_str.length; i++){
        split_str[i] = split_str[i][0].toUpperCase() + split_str[i].slice(1);
    }
    console.log(split_str.join(" "))
}
    titleCase(str_3)