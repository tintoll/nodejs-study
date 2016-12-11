/**
 * Created by tinoll on 2016. 12. 9..
 */

//가장 최초로 진입하는 파일을 메인 애플리케이션 파일
var express = require('express'); //리턴값이 함수임

var app = express();   //함수를 실행하면 애플리케이션을 리턴함

app.locals.pretty = true; // 만들어지는 html 을 보기 좋게 하기위해 사용

app.set('view engine', 'jade'); //템플릿 엔진 설정
app.set('views','./views'); //템플릿 파일 위치
app.get('/template',function(req,res){
    var time = new Date();

    res.render('temp', {time:time, _title:'jade'});   //temp라는 템플릿파일을 렌더링해서 웹페이지에 전송한다는 의미
                                        //두번째 인자로는 변수를 보낼수 있습니다
});


//쿼리 스트링 이용하기
//Non Sementic url  === /topic?id=0
/*
app.get('/topic',function(req,res){
    var topics = [
        'javascirt is ...',
        'Node is ...',
        'Express is ...'
    ];

    var as = `
        <a href="/topic?id=0">javascript </a> <br>
        <a href="/topic?id=1">node </a><br>
        <a href="/topic?id=2">Express </a><br>
        ${topics[req.query.id]}
    `;

    res.send(as);
});
*/
//Sementic url 형식 사용하기
app.get('/topic/:id',function(req,res){
    var topics = [
        'javascirt is ...',
        'Node is ...',
        'Express is ...'
    ];

    var as = `
        <a href="/topic?id=0">javascript </a> <br>
        <a href="/topic?id=1">node </a><br>
        <a href="/topic?id=2">Express </a><br>
        ${topics[req.params.id]}
    `;

    res.send(as);
});
app.get('/topic/:id/:mode',function(req,res){
    res.send(req.params.id+','+req.params.mode);
});


app.use(express.static('public'));  // 정적파일을 접근할수 있는 위치 지정

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});

//get함수 같은것을 라우터라고 부른다(어떤 요청이 들어왔을때 길을 찾을수 있게 해주는 역할)
app.get('/',function(req,res){
    res.send('/ 호출 ');
});

app.get('/route',function(req,res){
    res.send('Hello Router <img src="/r.png" />');
});


//동적 요청
app.get('/dynamic',function(req,res){
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding'+i+'</li>';
    }
    var time = Date();
    var output =   `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Title</title>
                    </head>
                    <body>
                        hello dynamic html
                        <ul>
                        ${lis}
                        </ul>
                        ${time}
                    </body>
                    </html>`;

    res.send(output);
});

app.get('/login',function(req,res){
    res.send('login please');
});