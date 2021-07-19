//jshint esversion:6

const express = require("express");
const app = express();
const Swal = require('sweetalert2')
const bodyParser = require("body-parser");
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
var userData = [];
var transactionData=[];
app.get("/", function (req, res) {
  res.render('index',{title:"Basic Banking System"});
});

app.get("/cUser.ejs", function (req, res) {
  
  res.render("cUser",{title:"Create User"});
});

app.post("/cUser.ejs", function (req, res) {
  var name = req.body.personName;
  var email = req.body.personEmail;
  var bal = req.body.personBalance;
  userData.push({ name: name, email: email, bal: bal });
  
});

app.get("/thistory.ejs", function (req, res) {
  res.render('thistory',{tdata:transactionData,title:"Transaction History"})
});

app.get("/tmoney.ejs", function (req, res) {
  res.render('tmoney',{keyData:userData,uData:userData,title:"Transaction Page"});
  
});

app.post("/tmoney.ejs",function (req,res){
  var today= new Date();
  var tFrom=req.body.tFrom;
  var tTo=req.body.tTo;
  var personAmount=Number(req.body.personAmount);
  var fromIndex =getIndex(tFrom);
  var toIndex = getIndex(tTo);
 if(tFrom!=null && tTo!=null && personAmount !=null && personAmount >=0 && Number(userData[fromIndex].bal)>=personAmount && Number(userData[fromIndex].bal)>=0){
    transactionData.push({dUser:tFrom,cUser:tTo,tamount:personAmount,time:today.toLocaleString()});
      userData[toIndex].bal=Number(userData[toIndex].bal)+Number(personAmount);
      userData[fromIndex].bal=Number(userData[fromIndex].bal)-Number(personAmount); 
  }
   
})
const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log(`Your connection is at port ${PORT}`);
});

//function to get index
function getIndex(name) {
  for(var i=0;i<userData.length;i++){
    if (userData[i].email===name) {
        return i
    }
  }
}
