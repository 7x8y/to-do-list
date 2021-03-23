const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set('view engine', 'ejs')
// console.log(date())


var items = ["Buy Food",
"Cook Food",
"Eat Food"]

var workItems = []


app.get("/", function(req, res){

    var day = date()

    res.render('list',{list_title: day,newlistitemsarray: items})


})

app.post("/", (req, res)=>{

     var newitemform_post_req = req.body.newitem;

     if(req.body.list === "work"){
         workItems.push(newWorkItems)
         res.redirect("/work")
     }
     else{
         items.push(newitemform_post_req)
        console.log(newitemform_post_req)
        res.redirect("/")

     }



})


app.get("/work", (req, res)=>{
    res.render("list",{list_title: "workList", newlistitemsarray: workItems})

})

app.post("/work", (req, res)=>{
    var newWorkItems = req.body.newitem;
    workItems.push(newWorkItems)
    res.redirect("/work")
})

app.get("/about", (req, res)=>{
    res.render("about")
})





app.listen(3000, function(){
    console.log("server started on port 3000")
})
