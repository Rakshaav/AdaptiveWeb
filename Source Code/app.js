
var     express = require("express"),
        mongoose = require("mongoose"),
        passport = require("passport"),
        User = require("./models/user"),
        bodyParser = require("body-parser"),
        LocalStrategy = require("passport-local"),
        passportLocalMongoose = require("passport-local-mongoose");


var app = express();
app.set('view engine','ejs');
app.use(require("express-session")({
    secret:"Rust is",
    resave:false,
    saveUninitialized:false
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('views'))
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


var clickSchema= new mongoose.Schema({
  id :String,
  username:String,
  action:String
});
var Click= mongoose.model("Click",clickSchema);


var user,date;
let db;

mongoose.set('debug',true)

mongoose.connect("mongodb://127.0.0.1:27017/newDatabase",{useNewUrlParser:true},(err,database) =>{
  if(!err)
  {
    console.log("connected nwwe");
    db = database;
  }
});


app.get("/",function(req,res){

    res.render("home");
});



app.get("/secret",isLoggedIn, function (req,res) {
    var a = req.user.username;
    user = req.user.username;
    new Date(Date.now()).toLocaleString();
    var x = Date();
  db.collection("clicks").find({username:user},{'action':1}).toArray(function(err,result)
{
  if(err)
  console.log(err);
  else {
    if(result.length > 0)
    {
      console.log(result);
      res.render("secret",{user:a,date:x,result:result})
    }
  }
});
  //res.render("secret",{user:a,date:x});
});




app.get("/index",function(req, res) {
    res.render("index");
});
app.get("/index2",function(req, res) {
    res.render("index2");
});
app.get("/index1",function(req, res) {
    res.render("index1");
});
app.get("/index21",function(req, res) {
    res.render("index21");
});
app.get("/index3",function(req, res) {
    res.render("index3");
});
app.get("/index4",function(req, res) {
    res.render("index4");
});
app.get("/index5",function(req, res) {
    res.render("index5");
});
app.get("/register",function(req, res) {
    res.render("register");
});

app.get("/questions/218384/what-is-a-nullpointerexception-and-how-do-i-fix-it",function(req, res) {
    res.redirect("/index");
});

app.get("/questions/513832/how-do-i-compare-strings-in-java",function(req, res) {
    res.redirect("/index");
});

app.get("/questions/40480/is-java-pass-by-reference-or-pass-by-value",function(req, res) {
    res.redirect("/index");
});


app.get("/questions/6343166/how-do-i-fix-android-os-networkonmainthreadexception",function(req, res) {
    res.redirect("/index");
});

app.get("/questions/9554636/the-use-of-multiple-jframes-good-or-bad-practice",function(req, res) {
    res.redirect("/index");
});

app.get("/questions/23353173/unfortunately-myapp-has-stopped-how-can-i-solve-this",function(req, res) {
    res.redirect("/index");
});

app.get("/questions/5554734/what-causes-a-java-lang-arrayindexoutofboundsexception-and-how-do-i-prevent-it",function(req, res) {
    res.redirect("/index");
});

app.get("/questions/13102045/scanner-is-skipping-nextline-after-using-next-or-nextfoo",function(req, res) {
    res.redirect("/index");
});

app.get("/questions/5621338/how-to-add-jtable-in-jpanel-with-null-layout",function(req, res) {
    res.redirect("/index");
});
app.get("/questions/3177733/how-to-avoid-java-code-in-jsp-files",function(req, res) {
    res.redirect("/index");
});
app.get("/questions/7229226/should-i-avoid-the-use-of-setpreferredmaximumminimumsize-methods-in-java-swi",function(req, res) {
    res.redirect("/index");
});
app.get("/questions/504103/how-do-i-write-a-correct-micro-benchmark-in-java",function(req, res) {
    res.redirect("/index");
});
app.get("/questions/2770321/what-is-a-raw-type-and-why-shouldnt-we-use-it",function(req, res) {
    res.redirect("/index");
});
app.get("/questions/17874717/providing-white-space-in-a-swing-gui",function(req, res) {
    res.redirect("/index");
});
app.get("/questions/2591098/how-to-parse-json-in-java",function(req, res) {
    res.redirect("/index");
});
app.post("/register",function(req,res){
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){
       if(err)
       {
           console.log(err);
           return res.render("register");
       }
       passport.authenticate("local")(req,res,function(){
           res.redirect("/secret");
       });

    });
});

app.get("/login",function(req, res) {
    res.render("login");
})

app.post("/login",passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect:"/login"
}), function(req,res){
});

app.get("/logout",function(req, res) {
   req.logout();
   res.redirect("/");
})

function isLoggedIn(req,res,next)
{
   if(req.isAuthenticated())
   {
       return next();
   }
   res.redirect("/login");
}



app.listen(3000,function(){
console.log("Server has started");
});


app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date(),username:user,action:"Clicked on links"};
  console.log(click);
  console.log(db);
  db.collection('clicks').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });
});


app.post('/clicked1', (req, res) => {
  const mice1 = {clickTime: new Date(),username:user,action:"Asked question"};
  console.log(mice1);
  console.log(db);
  db.collection('clicks').save(mice1, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('mouseover added to db');
    res.sendStatus(201);
  });
});

app.post('/clicked2', (req, res) => {
  const mice1 = {clickTime: new Date(),username:user,action:"Selected particular information/Commented"};
  console.log(mice1);
  console.log(db);
  db.collection('clicks').save(mice1, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('Select operation was added to db');
    res.sendStatus(201);
  });
});

app.post('/clicked3', (req, res) => {
  const mice1 = {clickTime: new Date(),username:user,action:"Vote"};
  console.log(mice1);
  console.log(db);
  db.collection('clicks').save(mice1, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('Vote operation was added to db');
    res.sendStatus(201);
  });
});


app.post('/clicked4', (req, res) => {
  const mice1 = {clickTime: new Date(),username:user,action:"Scroll"};
  console.log(mice1);
  console.log(db);
  db.collection('clicks').save(mice1, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('Scroll operation was added to db');
    res.sendStatus(201);
  });
});
