let a = 1;
let c = ++a; // CV1: a = a + 1 ( a = 2); CV2: c = a (c = 2, a = 2)
 c = a++; //  CV1: c = a ( c = 2, a = 2), CV:2 a = a + 1 ( a = 3)
c = --a; // CV1: a = a -1 (a = 2); CV2: c = a ( c = 2, a = 2)
// c = 1, a = 2
// toan tu: = + - x / === == > < >= <+ ? && || ++ -- 
for (let i = 1; i < 5; i++) {
  a = a + 5;
  c = c++;
  // vong lap 1
  // i = 1
  // a = 7 
  // c = 2 // CV1: c = c (c = 2), CV2: c= c + 1 (c = 3)
  // vong lap 2
  // i = 2
  // a = 12
  // c = 3 // CV1: c = c (c = 3), CV2: c = c + 1 (c = 4)
  // vong lap 3
  // i = 3
  // a = 17 
  // c = 4 // CV1: c = c (c = 4), CV2: c = c + 1 (c = 5)
  // vong lap 4
  //i = 4
  // a = 22
  // c = 5 // CV1: c = c (c = 5), CV2: c = c + 1 (c = 6)
  console.log(i)
  console.log(a)
  console.log(c)
}
let d = ++a; // d = 23 // CV1: a = a + 1(a = 23), CV2: d = a (d = 23, a = 23)  
let e = --a; // e = 22 // CV1: a = a - 1(a = 22), CV2: e = a (e = 22, a = 22)
let f = a--;// f = 22 // CV1: f = a (a = 22, f = 22), CV2: a = a - 1 (a = 21)