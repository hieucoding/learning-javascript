function writeLog() {
    var myString = ''
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

writeLog('duong', 'trung', 'hieu')