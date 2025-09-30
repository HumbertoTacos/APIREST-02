
const { randomUUID } = require ("node:crypto");

let users = [
    {
        id: randomUUID(),
        name: "Humberto",
        age: 22,
        email: "Humberto@gmail.com",
        active: true
    },

    {
        id: randomUUID(),
        name: "Becerra",
        age: 21,
        email: "Becerra@gmail.com",
        active: true
    }
];

const regexLetters = /^[a-zA-Z\s]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function findAll() {
    return users;
}

function findById(id) {
    return users.find((u) => u.id === id) || null;
}

function addUser(item) {
    const user = {
        id: randomUUID(),
        name: item.name,
        age: item.age,
        email: item.email,
        active: true
    }

    if(regexLetters.test(user.name) && (user.age >= 18 && user.age < 100) && regexEmail.test(user.email)) {
        users.push(user);
        return user;
    }

    return null;
}

function updateUser(id, data) {
    const index = users.findIndex((u) => u.id === id);

    if(index === -1) return null;

    const newName = typeof data.name === "undefined" ? users[index].name : data.name;
    const newAge = typeof data.age === "undefined" ? users[index].age : Number(data.age);
    const newEmail = typeof data.email === "undefined" ? users[index].email : data.email;
    const newActive = typeof data.active === "undefined" ? users[index].active : Boolean(data.active);

    if(!regexLetters.test(newName)) return null;
    if(newAge < 18 || newAge >= 100) return null;
    if(!regexEmail.test(newEmail)) return null;

    users[index] = {
        ...users[index],
        name: newName,
        age: newAge,
        email: newEmail,
        active: newActive
    };

    return users[index];
}

module.exports = {findAll, findById, addUser, updateUser};
