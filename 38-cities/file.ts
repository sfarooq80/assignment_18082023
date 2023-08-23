// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
var defaultcountry = "Pakistan";
function describe_city(city:string ){
    if(city=="Paris"){
    console.log(`${city} is in France`);
    }    else{
        console.log(`${city} is in  ${defaultcountry} `);
        }
}
describe_city("karachi")
describe_city("Lahore")
describe_city("Paris")
 