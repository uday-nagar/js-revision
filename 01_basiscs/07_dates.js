let date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(typeof date);

let myCreatedDate = new Date(2026,0,23);
console.log(myCreatedDate.toLocaleDateString());

let newCreatedDate = new Date("2026-01-14");//months dont start forom zero 
console.log(newCreatedDate.toLocaleDateString());
let myTimeStamp = Date.now();
console.log(`the date in seconds is ${myTimeStamp/1000}`);

console.log(newCreatedDate.getTime().to);



console.log(date.getMonth()+1);

console.log(date.toLocaleDateString());


