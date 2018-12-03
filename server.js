const express = require('express');
const hbs = require('hbs');

var maintenance=0;
var app = express();

app.use(express.static(__dirname + '/views'));
app.use((req,res,next)=>{
    if(maintenance===0)
        next();
    else{
        res.render('maintenance.hbs',{
            pageTitle:"Maintenance"
        });
    }

});



hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('getUserName',(userName)=>{

    return userName +'@gmail.com';
});
hbs.registerHelper('upperCase',(text)=>{

    return text.toUpperCase();
});
app.set('view engine','hbs');

app.get('/',(req,res)=>{

    res.render('home.hbs',{
        pageTitle:'Home Page',
        userName:'sinandik'

    });
});



app.get('/about',(req,res)=>{

    res.render('about.hbs',{
        pageTitle:'About'
    });
});

app.get('/bad',(req,res)=>{
    res.send( {
            errorMessage:'Unable to handle',

    }

    );
});


app.listen(8080);