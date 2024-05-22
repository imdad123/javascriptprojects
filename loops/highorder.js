//highorder array function

const arr = [1,2,4,5,6];
for (const iterator of arr) {
    console.log(iterator);

}
//maps

const map = new Map();
 map.set("in","india");
 map.set("pk","pakistan");
 map.set("aus","Austrilia");
 for (const [key,value] of map) {
    console.log(key," : ",value);

 }

 const superHeroes = {
    batman :"batman",
    spiderman:"spiderman",
    thor:"thor"
 };
 for (const key in superHeroes) {
   console.log(`Key: ${key} and value ${superHeroes[key]}`);
 }
 arr.forEach(function(index,key){
    console.log(index,key);

 },);
 const myCoding =[
    {
        language:"js",
        fullform:"javascript"
    },
    {
        language:"java",
        fullform:"java"
    },
    {
        language:"php",
        fullform:"preprocessorhypertext"
    }
 ];
 myCoding.forEach((item)=>{
    console.log(item['language']);
 })