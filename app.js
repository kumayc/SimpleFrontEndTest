var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});
app.get("/about", function(req, res){
    res.render("about");
});
app.get("/faq", function(req, res){
    res.render("faq");
});
app.get("/contact", function(req, res){
    res.render("contact");
});
app.get("/dataVisualisation", function(req, res){
    res.render("dataVisualisation");
});
app.get("/successedSubmit", function(req, res) {
    res.render("successedSubmit");
});
app.post("/contact", function(req, res){
    //do something
    res.redirect("/successedSubmit"); 
});
app.get("/hello", function(req, res) {
    res.render("hello");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The chat_box server started!");
});