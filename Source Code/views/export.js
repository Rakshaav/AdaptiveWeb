print("UserAction,ActionCount");
print("User aaa"+" ," + db.clicks.find({username:"aaa",action:"Clicked on links"}).count());
print("User bbb"+" ," + db.clicks.find({username:"bbb",action:"Clicked on links"}).count());
print("User ccc"+" ," + db.clicks.find({username:"ccc",action:"Clicked on links"}).count());
