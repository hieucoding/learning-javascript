// number type
var a = 1
var b = 2
var c = 3
//string type
var fullName = 'Duong Hieu'
// boolean
var isSuccess = true
//undefined (biến 0 đc gán)
var age
//null (nothing/ 0 có gì)
var isNull = null
// Nan (số không xác định được)
var d = 10
var e = 0
f = d / e
console.log(f)
// object
var object = {
    name: 'Hieu',
    age: '19',
    adress: 'Hanoi'
}
console.log(object)
// symbol
var id = Symbol('id') //unique
var id2 = Symbol('id') //unique
console.log(id === id2)