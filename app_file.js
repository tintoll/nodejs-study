
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();


app.use(bodyParser.urlencoded({extended:false}));

app.locals.pretty = true;
app.set('views','./views_file');
app.set('view engine','jade');

//작성 폼 호출
app.get('/topic/new',function(req,res){
    res.render('new');
});
/*
//목록 가져오기
app.get('/topic',function (req,res) {
    fs.readdir('data',function (err, files) {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }

        res.render('view',{'topics':files});
    });
});
//파일 내용 읽기
app.get('/topic/:id',function (req,res) {
    var id = req.params.id;

    fs.readdir('data',function (err, files) {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }

        fs.readFile('data/'+id, function (err,data) {
            if(err){
                console.log(err);
                res.status(500).send('Internal Server Error');
            }

            res.render('view',{'topics':files,'title':id,'desc':data})
        })
    });
});
*/

app.get(['/topic','/topic/:id'],function (req,res) {




    fs.readdir('data',function (err, files) {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var id = req.params.id;

        if(id) {
            fs.readFile('data/'+id, function (err,data) {
                if(err){
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }

                res.render('view',{'topics':files,'title':id,'desc':data})
            })
        } else {
            res.render('view',{topics:files,title:'welcome',desc:'Hello for server'});
        }
    });
});

//파일에 저장 내용 쓰기
app.post('/topic',function(req,res){
    var title = req.body.title;
    var desc = req.body.desc;

    //파일쓰기 (파일명, 파일내용, 콜백)
    fs.writeFile('data/'+title, desc, function(err){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        //res.send('Success!');
        res.redirect('/topic/'+title);
    });

});


app.listen(4000, function(){
    console.log('connected 4000 port');
});