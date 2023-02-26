for (var a = 0; a < 10; a++) {
    console.log(a)
    if (a >= 5) {
        break
    }
}
for (var a = 0; a < 10; a++){
    if (a%2 !== 0) {
        continue
    }
    console.log(a)
}    