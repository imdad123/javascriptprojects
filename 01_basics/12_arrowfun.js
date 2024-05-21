const user={
    name:"imdad",
    greetMessage:function(){
        console.log(`Welcom ${this.name}`);
    }
}
//this inside arrow funtion refers to its surronind or global

user.greetMessage()
const sum = (num1,num2)=>(num1+num2);
console.log(sum(30,30));
const showUsername = ()=>({username:"imdad"});
console.log(showUsername().username);

//{} () => three ways to return from arrow functions