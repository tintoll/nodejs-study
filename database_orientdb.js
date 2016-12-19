

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
/*
var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
    params : {
    rid : '#22:0'
    }
};
db.query(sql, param).then(function (results) {
    console.log(results);
});

*/

/*
//@rid를 가져오겠다는 의미임 #22:0 <--select from topic하면 해당 레코드의 id가 나옴.
db.record.get('#22:0').then(function (record) {
   console.log('record : ',record);
});
*/

//insert
/*
var insertSql  = 'INSERT INTO TOPIC(title, description) VALUES(:title, :desc)';
var param = {
    params : {
        title : 'Express',
        desc : 'Express is....'
    }
};

db.query(insertSql,param).then(function (results) {
    console.log(results);  //insert한 데이터가 출력된다
});
*/

//update
/*
var sql  = 'UPDATE topic SET title = :title WHERE @rid = :rid';
var param = {
    params : {
        title : 'Express11111',
        rid : '#21:0'
    }
};

db.query(sql,param).then(function (results) {
    console.log(results);  //update한 갯수가 출력된다
});
    */

//delete
var sql  = 'DELETE FROM topic WHERE  @rid = :rid';
var param = {
    params : {
        rid : '#21:0'
    }
};

db.query(sql,param).then(function (results) {
    console.log(results);  //delete한  갯수가 출력된다
});