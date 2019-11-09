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


// FUNCTIONS

function rest(person) {
    if (person.health == 10) {
        alert('health maxed out');
     } else {
     person.health = 10;
     return person;
    }
};

function pickUpItem(person,weapn) {
    person.inventory.push(weapon);
}

// function equipWeapon(person) {
//    person.inventory[0] = person.weapon;
//     }
// };
