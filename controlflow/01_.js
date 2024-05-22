//< > <= >= == != === !==

const isLoggedIn = true;
if(isLoggedIn)
{
        console.log("LoggedIn");
}
//this is alternate syntax for if
if(isLoggedIn) console.log("Loggin");

const balance =1000;
if(balance <400)
    {
        console.log("Less than 400");
    }
else if(balance > 400)
    {
        console.log("Greater than 400");
    }
else{
    console.log("Default Value");
}