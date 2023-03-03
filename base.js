var personID =  [
  {
    id: 1,
    name: 'duong',
    age: 18
  },
  {
    id: 2,
    name: 'trung',
    age: 19
  },
  {
    id: 3,
    name: 'hieu',
    age: 20
  },
  {
    id: 4,
    name: 'dai',
    age: 22
  },
  {
    id: 5,
    name: 'nghia',
    age: 40
  }
]

personID.forEach(function(person) {
  console.log(person)
})

var ageFind = personID.every(function(person) {
  return person.age < 20
})
console.log(ageFind)

var ageFind = personID.some(function(person) {
  return person.age < 20
})
console.log(ageFind)

var ageFind = personID.find(function(person) {
  return person.name = "duong"
})
console.log(ageFind)

var ageFind = personID.filter(function(person) {
  return person.age < 20
})
console.log(ageFind)