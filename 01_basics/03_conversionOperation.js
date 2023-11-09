let score = "true"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);


let isLoggedIn = "sayak"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// "sayak" => 1
// 33 => "33"

/******** OPERATIONS ********/

let value = 3
let negValue = -value;
console.log(negValue);

let str1 = "hello"
let str2 = " sayak"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(2 + "1");
console.log(2 + 2 + "1");
console.log("1" + 2 + 2);

console.log(+true);
console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);