//Objects
let mysmybol = Symbol("key");
let jsUser ={
    [mysmybol]:'key1',
    name:"imdad",
    age:30,
    email:"uimdad19@gmail.com",
    fullname:{
        name:{
            first:"imdad",
            last:"ullah"
        }

    }
};

console.log(jsUser.fullname.lastname?.name.first);
console.log(jsUser['name']);
jsUser.greeting=function(){
    console.log(`Hello JS USer ${this.name}`);
}
//Object.freeze(jsUser);
jsUser.email='abc@test.com';
console.log(jsUser.greeting());
console.log(jsUser.email);
console.log(jsUser[mysmybol]);
//singelton Object
let obj1 ={
    name:"abc"
}
let object3= {...obj1,...jsUser};
console.log(object3);
//object = new Object
// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));

