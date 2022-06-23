const config = require("./config");
const config1 = require("./config1");
const config2 = require("./config2");

console.log(config);
console.log(config.projectName);
console.log(config.projectVersion);
console.log("******************");
//config1  
console.log(config1.ref.name);
console.log(config1.title);
console.log(config1.list);
console.log(config1.active);
console.log(config1.price);

console.log("******************");
//config2
console.log(config2.sum(11, 21));



