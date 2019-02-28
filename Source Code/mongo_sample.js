var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect("mongodb://127.0.0.1:27017/LoginDatabase", { useNewUrlParser: true }, (err) => {
  if(!err)
    console.log('connected');
});

var loginSchema = new mongoose.Schema({
  userID: String,
  pass: Number,
});

var Login = mongoose.model("Login", loginSchema);

var user1 = new Login({
  userID: "aaa",
  pass: 123,
});

var user2 = new Login({
  userID: "bbb",
  pass: 123,
});

var user3 = new Login({
  userID: "ccc",
  pass: 123,
});

user1.save(function(err, login){
  if(err)
    console.log("somethign went wrong");
  else
    console.log("saved first user");
});

user2.save(function(err, login){
  if(err)
    console.log("somethign went wrong");
  else
    console.log("saved second user");
});

user3.save(function(err, login){
  if(err)
    console.log("somethign went wrong");
  else
    console.log("saved third user");
});
