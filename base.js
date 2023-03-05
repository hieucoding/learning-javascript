// call back

// la ham function dc chuyen qua doi so
// khi goi ham khac

//1-la ham
//2-duoc truyen qua doi so

function myCallback (callback) {
    console.log('callback: ', callback)
}
myCallback(1234)

function newFunction(param) {
    param(12345)
}