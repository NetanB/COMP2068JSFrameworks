//import connect
var connect = require('connect');
//import url
var url = require('url');

//create app object
var app = connect();

//app.listen(3000);
//console.log("app is running on http://localhost:3000");

//**The parser**
 
var parseFunction = function (req, res, next) {
    var urlParsing = url.parse(req.url, true).query;
    var method = urlParsing.method;
    var x = urlParsing.x;
    var y = urlParsing.y;

    switch(method){
        case "add":
            res.end(x + " + " + y + " = " + add(x, y));
        case  "subtract":
            res.end(x + " - " + y + " = " + subtract(x, y));
        case "multiply":
            res.end(x + "*" + y + " = " + multiply(x, y));
        case "divide": 
            res.end(x + "/" + y + " = " + divide(x, y));
        default:
            showError();
    }
}

var showError = function (req, res, next) {
    res.end('The URL entered does not contain the correct format,'+
    ' \n try this for example: "http://localhost:3000/lab3?method=add&x=16&y=4" ');
}

var add = function (numOne, numTwo) {
    return +numOne + +numTwo;
}

var subtract = function (numOne, numTwo) {
    return +numOne - +numTwo;
}

var multiply = function (numOne, numTwo) {
    return +numOne * +numTwo;
}

var divide = function (numOne, numTwo) {
    return +numOne / +numTwo;
}

app.use('/lab3', parseFunction);
app.use('/', showError);

app.listen(3000);

