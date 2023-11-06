const accountId = 144553
let accountEmail = "nandysayak552@gmail.com"
var accountPassword = "12345"
accountCity = "Asansol"
let accountState

// accountId = 2

accountEmail = "ns@ns.gmail.com"
accountPassword = "12121212"
accountCity = "Burnpur"

console.log(accountId);

/*
    Prefer not to use var
    Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);