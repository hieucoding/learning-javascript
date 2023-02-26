// loop for
var myArray = [
    'duong',
    'trung',
    'hieu',
    '1234',
]
var arrayLenght = myArray.length
for (i = 0; i < arrayLenght; i++) [
    console.log(myArray[i])
]
// loop for/in
var myInfo = {
    name: 'duong hieu',
    age: '19',
}
for (var key in myInfo) {
    console.log(myInfo[key])
}
// loop for/of
var myArray = [
    'name',
    'age',
    'number'
]
for (var value of myArray) {
    console.log(value)
}
// loop do/while
var a = 0
do {
    a++
    console.log (a)
} while (a < 10)