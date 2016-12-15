

var OrientDB = require('orientjs');

var server = OrientDB({
    host : 'localhost',
    port : 2424,
    username : 'root',
    password : 'lee1234'
});

var db = server.use('o2');

//CREATE


//쿼리 실행하는 방식
/*
var sql = 'SELECT FROM topic';
 db.query(sql).then(function (results) {
 console.log(results);
 });
 */

//조건값을 넣는 방법
var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
    params : {
    rid : '#22:0'
    }
};
db.query(sql, param).then(function (results) {
    console.log(results);
});





/*
//@rid를 가져오겠다는 의미임 #22:0 <--select from topic하면 해당 레코드의 id가 나옴.
db.record.get('#22:0').then(function (record) {
   console.log('record : ',record);
});
*/

/*
    CREATE
    READ
    UPDATE
    DELETE

    CRUD
 */
