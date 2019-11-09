// Write your JS here

//WORLD OBJECTS
let hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    alive: true,
    weapon: {
        type: "",
        damage: 2,
    }
}

dagger = {
    type: "dagger",
    damage: 2,
}

let hobgoblin = {
    name: "Akolurg",
    health: 4,
    alive: true,
    weapon: {
        type: "spoon",
        damage: 0.5,
    }
}
// CHECK IF THE HERO OBJECT IS MODIFIED

// let checkRest = rest();
// let checkPickUpItem = pickUpItem();

// window.rest() = function() {
//     checkRest();
//     console.log("REST WAS RUN")

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
     displayStats(hero);
    }
    return person;
};



function pickUpItem(person, weapon) {
    person.inventory.push(weapon);
    displayStats(hero);
//    return person;
}



// Problem: what happens to the old weapon,
// What happens to the inventory item (is it duplicated?)
function equipWeapon(person) {
    if (person.inventory.length > 0) {
        person.weapon = person.inventory[0];
//        displayStats(person);
    }
    displayStats(hero);
}



// Change character name --- button
function changeName() {
    hero.name = prompt("What is your name adventurer?");
    displayStats(hero);

};


// DISPLAYING PLAYER STATS
// has a lot of duplication cut this down if time allows
// could be done by iterating through array of obj properties
// try replaceChild instead of removeChild


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
    while (statsBox.firstChild) {
        statsBox.removeChild(statsBox.firstChild);
    }
  //  statsBox.removeChild(statsBox.firstChild);
    // statsBox.innerHTML = "";
    statsBox.appendChild(playerStats);
}

//


function combat(person, enemy){
//declare some variables
    const personAttack = document.createElement('p');
    personAttack.innerHTML = `You have dealt ${person.weapon.damage} damage to ${enemy.name}
    the hobgoblin and received ${enemy.weapon.damage} damage`;

//combat calculations
    enemy.health = enemy.health - person.weapon.damange;
    person.health = person.health - enemy.weapon.damage;
// // status change 
//     if (person.health < 0 ) {
//         person.alive = false;
//     }
//     if (enemy.health < 0) {
//         enemy.alive = false; 
//     }
// print notifications
    const arena = document.getElementById("arena");
    arena.appendChild(personAttack);
    displayStats(hero);
};



displayStats(hero);
// hero.watch("name", displayStats(hero));

// document.getElementById("dagger").addEventListener("click", function(){
//     let daggerImage = document.getElementById("dagger");
//     daggerImage.parentNode.removeChild(daggerImage);
//     }
// )






