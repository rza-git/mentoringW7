class Character {

    // Health Bar
    // Base Damage
    // Status Alive or Dead
    // Bisa handle Critical Damage
    
    constructor(healthBar, baseDamage, isAlive, critChance, critMultiplier) {
        this.healthBar = healthBar; // Healthbar character
        this.baseDamage = baseDamage; // Base damage (Normal Damage)
        this.isAlive = isAlive; // Boolean true (hidup), false (mati)
        this.critChance = critChance; // 0-100% 
        this.critMultiplier = critMultiplier; // 1-5x
    }

    // Menyerang musuh
    attack(target) {

        let randomNumber = Math.floor(Math.random() * 100)

        if(randomNumber < this.critChance) {
            // Deal critical damage
            console.log("Deal Critical Damage")
            let damage = this.calculateCrit()
            target.healthBar -= damage
        } else {
            // Deal normal damage
            console.log("Deal Normal Damage")
            target.healthBar -= this.baseDamage;
        }

        // Cek status enemy healthbar
        if(target.healthBar <= 0) {
            target.isAlive = false;
        }

    }

    // Menghitung Critical Damage
    calculateCrit() {
        // 100 * 2 ==> 200
        return this.baseDamage * this.critMultiplier
    }
}


// Class Warrior
class Warrior extends Character {

    constructor() {
        // constructor(healthBar, baseDamage, isAlive, critChance, critMultiplier)
        super(100, 20, true, 60, 2)
    }
}

// Class Enemy
class Enemy extends Character {
    constructor() {
        // constructor(healthBar, baseDamage, isAlive, critChance, critMultiplier)
        super(80, 40, true, 70, 3)
    }
}

// ES5
module.exports = {
    Character,
    Warrior,
    Enemy
}

// ES6
// export default