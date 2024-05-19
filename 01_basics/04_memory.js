//stack(Primitive) heap(non-primitive)
let name="Imdad";
let anotherName=name;
anotherName="Faisal";
//this store in stack anothername store a copy of name not original variable
console.log(name);
console.log(anotherName);

let userOne = {
    email:"test@gmail.com",
    username:'test123'
};
let userTwo = userOne;
userTwo.email="test1@gmail.com";
console.log(userTwo.email);
console.log(myObj);
//it store orginal reference in userTwo