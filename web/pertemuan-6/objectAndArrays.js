// objects
let person = {
    firstName: 'Nahrul',
    lastName: 'Hayat',
    age: 22,
    address: {
        city: 'Cirebon',
        country: 'Indonesia'
    }
}
console.log(person.firstName) // Nahrul
console.log(person['address']['city']) // Cirebon

// modifying object and adding properties
person.age = 23 // modifying existing property
person.job = 'Electrical Engineer' // adding new property

// deleting properties

delete person.age

// arrays
let fruits = ['apple', 'orange', 'banana', 'kiwi']
console.log(fruits[0]) //apple

// modifying array
fruits[1] = 'pear' // Modifying an existing element
fruits.push('grape') // adding a new element to the end

fruits.pop() //removes the last element
fruits.shift() // removes the first element
fruits.splice(1,2) // removes elements starting from index 1 to 2 (exclusive)

// iterating through objects
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

// iterating through arrays
// for loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// forEach()
fruits.forEach(function (fruit){
    console.log(fruit)
})

// map()
let uppercasedFruits = fruits.map(function(fruit){
    return fruit.toUpperCase()
})