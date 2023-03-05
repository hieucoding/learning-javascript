Array.prototype.map2 = function(callback) {
    var output = [], arrayLenght = this.length

    for (var i = 0; 1 < arrayLenght; ++i) {
        var result = callback(this[i], i)
        output.push(result)
    }
    return output
}

var names = [
    'hoang',
    'thanh',
    'thang',
    'long'
]
var htmls = names.map2(function(nameFinder) {
    return `<h2>${nameFinder}</h2>`
})

console.log(htmls)