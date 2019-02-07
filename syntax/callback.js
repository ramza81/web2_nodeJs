// function a() {
//     console.log('A');
// }

var a = function a() {
    console.log('A');
}

function slowfunc(callback) {
    console.log('aaaa');
    callback();
    console.log('bbbbb');
}

slowfunc(a);