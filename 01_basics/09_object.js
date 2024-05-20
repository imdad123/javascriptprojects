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
//console.log(object3);
//object = new Object
// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
//console.log(jsUser.hasOwnProperty("login"));
const{email} = jsUser;
//console.log(email);
// const navbar =({email})=>{
//  console.log(email);
// }
// navbar(jsUser)
// const superHeroes  = {
//     "squadName": "Super hero squad",
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [
//       {
//         "name": "Molecule Man",
//         "age": 29,
//         "secretIdentity": "Dan Jukes",
//         "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//       },
//       {
//         "name": "Madame Uppercut",
//         "age": 39,
//         "secretIdentity": "Jane Wilson",
//         "powers": [
//           "Million tonne punch",
//           "Damage resistance",
//           "Superhuman reflexes"
//         ]
//       },
//       {
//         "name": "Eternal Flame",
//         "age": 1000000,
//         "secretIdentity": "Unknown",
//         "powers": [
//           "Immortality",
//           "Heat Immunity",
//           "Inferno",
//           "Teleportation",
//           "Interdimensional travel"
//         ]
//       }
//     ]
//   };
//   console.log(superHeroes['homeTown']);
