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

var i = 0

function ageTotal (accumulator, currentValue, currentIndex, originalArray) {
  i++
  return accumulator + currentValue.age
}
var total = personID.reduce(ageTotal, 0)

console.log(total)