const {Character, Warrior, Enemy} = require("./demo-module.js")


console.log("ROUND 1");
console.log("=========================================")
console.log("=========================================")


let warrior = new Warrior();
let enemy = new Enemy();
console.log("Before")
console.log(warrior.healthBar, "<<<<<<<<< WARRIOR")
console.log(enemy.healthBar, "<<<<<<< ENEMY")

warrior.attack(enemy)
console.log("After")
console.log(warrior.healthBar, "<<<<<<<<< WARRIOR")
console.log(enemy.healthBar, "<<<<<<< ENEMY")
if(enemy.isAlive) {
    console.log("Enemy still Alive")
} else {
    console.log("Enemy already Dead")
}