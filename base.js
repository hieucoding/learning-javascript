// var rows = 5

// for(let a = 1; a <= rows; a++) {
//     for(let b = 1; b <= a; b++) {
//         document.write('* ')
//     } 
//     document.write('<br/>')
// }

// for(let a = 1; a <= rows; a++) {
//     for(let b = a; b <= rows; b++) {
//         document.write('* ')
//     }
//     document.write('<br/>')
// }

// for(let a = 1; a <= rows; a++) {
//    for(let b = a; b <= rows; b++){
//     document.write('&nbsp;&nbsp;')
//    }
//    for(let b = 1; b <= a; b++) {
//     document.write('*')
//    }
//    document.write('<br/>')
// }

// for(let a = 1; a <= rows; a++) {
//     for(let b = 1; b <= a; b++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     for(let b = a; b <= rows; b++) {
//         document.write('*')
//     }
//     document.write('<br/>')
// }

// in hinh chu nhat rong
function veHinh(rows, columns) {

for(a = 1; a <= rows; a++) {
    if(a == 1 || a == 7 ) {
        for(let i = 1; i <= 22; i++) {
            document.write('*')
        }
    } else {
        for(let i = 1; i <= 22; i++){
            if(i == 1 || i == 22) {
                document.write('*')
            } else {
                document.write('&nbsp;&nbsp;')
            }
        }
    }
    document.write('<br/>')
}
}
veHinh(7, 22)