// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let friend:string = "Zuhaib";
let classname:string = "MSCS";

console.log(friend=="zuhaib"?true:false)
console.log(friend==="zuhaib"?true:false)

if(friend=="Zuhaib" && classname=="MSCS"){
    console.log("mine class")
}


let items:string[] = ['suzuku','honda','proton'];
if(items.includes('kei')){
    console.log("kei exist");
}else{
    console.log("kei not exist");

}