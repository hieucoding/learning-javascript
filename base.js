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
  // a = 
  // c =
  // vong lap 2
  // i = 
  // a =
  // c =
  console.log(i)
  console.log(a)
  console.log(c)
}
let d = ++a; 
let e = --a;
let f = a--;