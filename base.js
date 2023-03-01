function leapYearRange(start, end) {
    var yearRange = []
    for (var i = start; i <= end; i++)
{
    yearRange.push(i)
}
var new_array = []
yearRange.forEach(
    function(year)
    {
        if (findYear(year))
        new_array.push(year)
    })
    return new_array
}    
function findYear(year) {
    if ((year%4 ==0 && year%100 !=0 && year% 400 !=0)||(year%100 ==0 && year%400)) {
        return year
    } else {
        return false
    }
}
console.log (leapYearRange(2000, 2020))