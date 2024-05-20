
//username here is called parameters
function login(username)
{
    //console.log(!username);
    if(!username)
        {
            console.log("Username not Defined");
            return;
        }
   return username;
}
//this is called arguments
const loggedInMessage = login("Imdad");

//rest operator

function sum(...numbers)
{
    return numbers;
}
console.log(sum(100,200,300));
function calculatePrices({username,prices})
{
    return `The username is ${username} and prices are ${prices}`;
}
console.log(calculatePrices({
    username:"imdad",
    prices:400
}));
