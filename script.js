const students = ['Maurizio', 'Franco', 'Mattia', 'Flavia', 'Marco', 'Giovanna', 'Martina', 'Alessandro', 'Davide', 'Erika'];
const numbers = [10, 20, 30, 40, 50];

// console.log(students[1])
// console.log(numbers[3])

/**
 * ⭐️⭐️ AGGIUNGERE ELEMENTI AD UN ARRAY ⭐️⭐️
 */

// 👉 Aggiungo un elemento alla fine
// const name = prompt("Inserisci il nome da aggiungere alla lista");
// students.push(name);
// 👉 Aggiungo un elemento all'inizio
students.unshift('Sara');

/**
 * ⭐️⭐️ RIMUOVERE ELEMENTI AD UN ARRAY ⭐️⭐️
 */

// 👉 Rimuovo l'ultimo elemento dall'array
const lastElem = students.pop();
// alert(`é stato rimosso ${lastElem}`);
// 👉 Rimuovo il primo elemento dall'array
const firstElem = students.shift();

// console.log("prima di splice", students);

// 👉 Rimuovo n elementi
// - primo paramentro l'indice da cui partire ad eliminare
// - secondo paramentro quanti elementi successivi (compreso quello dell'indice) eliminare
const removedElements = students.splice(1, 2)

/**
 * ⭐️⭐️ ATTRAVERSARE UN ARRAY ⭐️⭐️
 */

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// for(let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

/**
 * ⭐️⭐️ ALTRI METODI ⭐️⭐️
 */
// 👉 Cerco se esiste l'elemento nell'array
const isGiovannaInArray = students.includes("Giovanna");
console.log(isGiovannaInArray)

// 👉 Converto l'array in stringa
console.log(students.join("|"))


// 👉 Converto la stringa in array
const names = "Samuele|Luca|Marco";
const namesArray = names.split("|");
console.log(namesArray)
