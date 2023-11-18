const accountId = 1234
let accountEmail= "jev@gmail.com"
var accountPass="1235"
accountCity="Mumbai"
let accountState  // undefined
// accountId=5 // not allowed
accountEmail="kn@mail.in"
accountPass="ca5"
accountCity="Jaipur"

/* preffered not to use var 
Because of issue in block scope and functional scope {} */
console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState])
