//
// Object destructuring
//

// const person = {
//     name: 'Ashley', 
//     age: 26,
//     location: {
//         city: 'Klerksdorp',
//         temp: 87
//     }
// };


// // adding a default value to name
// // renaming name to firstName
// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location

// console.log(`${firstName} is ${age}.`)
// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}.`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName);


//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', , '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type, small, medium, larege] = item;

console.log(`A medium ${type} costs ${medium}.`);