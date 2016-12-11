var fs = require('fs');


//Sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf-8'});
console.log(data);


//Async
console.log(2);
var data2 = fs.readFile('data.txt',{encoding:'utf-8'}, (err, data) => {
        if (err) throw err;
        console.log(data);
});
console.log(data2);
