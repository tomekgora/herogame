// Write your JS here

//WORLD OBJECTS
let hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2,
    }
}

dagger = {
    type: "dagger",
    damage: 2,
}

// let hobgoblin = {
//     name: "Akolurg",
//     health: 2,
//     weapon: {
//         type: "spoon",
//         damage: 0.5,
//     }
// }

// FUNCTIONS

// Watch hero properties for changes
// hero.watch(name, displayStats(hero));
// hero.watch(pHealth, displayStats(hero));
// hero.watch(weapon.type, displayStats(hero));
// hero.watch(weapon.damage, displayStats(hero));


function rest(person) {
    if (person.health == 10) {
        alert('health maxed out');
     } else {
     person.health = 10;
     return person;
    }
};

function pickUpItem(person, weapon) {
    person.inventory.push(weapon);
    return person;
}
// Problem: what happens to the old weapon,
// What happens to the inventory item (is it duplicated?)
function equipWeapon(person) {
    if (person.inventory.length > 0) {
        person.weapon = person.inventory[0];
    }
}

// Change character name --- button
function changeName() {
    hero.name = prompt("What is your name adventurer?");
};


// DISPLAYING PLAYER STATS

function displayStats(person) {
    // get data
    const name = person.name;
    const health = person.health;
    const weaponType = person.weapon.type;
    const weaponDamage = person.weapon.damage;
    // create HTML elements
    const playerStats = document.createElement('div');
    const pName = document.createElement('p');
    const pHealth = document.createElement('p');
    const pWeaponType = document.createElement('p');
    const pWeaponDamage = document.createElement('p');

    // adjust elements
    pName.innerHTML = `Player name: ${name}`;
    pHealth.innerHTML = `Player health: ${health}`;
    pWeaponType.innerHTML = `Weapon type: ${weaponType}`;
    pWeaponDamage.innerHTML = `Weapon damage: ${weaponDamage}`;
    playerStats.appendChild(pName);
    playerStats.appendChild(pHealth);
    playerStats.appendChild(pWeaponType);
    playerStats.appendChild(pWeaponDamage);

    // display elements on page
    const statsBox = document.getElementById("player-stats");
    statsBox.appendChild(playerStats);
}

displayStats(hero);

// displayStats(hero)
    // 

    // 




// DON'T FOCUgS ON CSS
// INSERT THE NAME DONE 

// STATS FUNCTION 

// UPDATING STATS

// FIGHTING DIFFERENT ENEMIES

 // FINDING AND PICKING UP ITEMS

 // HEALING POTIONS

 // TEXT ADVENTURE

 // ABILITY TO NAVIGATE DIFFERENT ROOMS (MAYBE SINGLE ROOM IS BETTER START)

 // COMMANDS: examine, take, drop, attack
