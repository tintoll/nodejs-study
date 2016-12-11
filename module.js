/*
var os = require('os');
console.log(os.platform());
*/

function sort(callback) {
    callback();
}

sort(function(){
    console.log('call back ')
})