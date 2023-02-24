//khai bao bien
var fullName = 'Duong Trung Hieu';
var height = '1m75'
var age = '19'
/*comment nhieu dong
abc
1234
*/
alert(fullName)
alert(height)
alert(age)
console.log(fullName)
confirm('ban co du tuoi?')
prompt('nhap so tuoi')
setTimeout(() => {
    alert('thuc hien sau 5 giay')
}, 5000);
setInterval(() => {
    console.log('lap lai trong log sau 2 giay')
}, 2000);
// toán tử gán 
var a = 1
a += 2
console.log(a)
// tương đương a = a + 2
a -= 2
// tương đương a = a - 2
// *=, /=, **= tương tự
// toán tử chuỗi
var firstName = ('Hieu')
var lastName = ('duong')
console.log(firstName + lastName)
// toan tu so sanh
/*
==          --> bang
!=          --> ko bang
<=          --> nho hon hoac bang
>=          --> lon hon hoac bang
<           --> nho hon
>           --> lon hon
*/
var a = 1
var b = 2
if (a < b) {
    console.log('dieu kien dung');
} else {
    console.log('dieu kien sai');
}
