const userInfo = require("./information")
console.log(`Hi, my name is ${userInfo.name} and I learn at ${userInfo.campus} campus`);
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, my name is ${userInfo.name} and I learn at ${userInfo.campus} campus`
})); 