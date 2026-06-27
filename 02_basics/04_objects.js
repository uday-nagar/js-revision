const tinderUser = new Object();
tinderUser.isLoggedIn = false;
tinderUser.username = "udayyyyyy";


const instaUser = {}
instaUser.username = "udayy";
instaUser.isLoggedIn = true;
instaUser.password ="uday@123";


const bothUser = {...instaUser, ...tinderUser}

bothUser2 = Object.assign(instaUser, tinderUser)

// console.log(bothUser);
// console.log(bothUser2);

tinderKeys = Object.keys(tinderUser);
// console.log( tinderKeys  );

// console.log(instaUser.hasOwnProperty('password'));

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const {isLoggedIn : log} = instaUser;

console.log(log);

