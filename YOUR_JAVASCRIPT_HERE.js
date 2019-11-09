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

function rest(person) {
    if (person.health == 10) {
        alert('health maxed out');
     } else {
     person.health = 10;
     return person;
    }
};

// function pickUpItem(person,weapon) {
//     person.inventory.push(weapon);
// }

// function equipWeapon(person) {
//     person.inventory
//     }
// };
