const express= require("express");
const app= express();
const port= 8080;
const path= require("path");
const {v4: uuidv4}= require("uuid");
const methodOverride= require("method-override");
app.use(methodOverride('_method')); 
//download path: npm i path

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")));

//default posts
let posts=[
    // {
    //     id:uuidv4(),
    //     title:"Default",
    //     content: "Hello World!!"
    // },
    // {
    //     id:uuidv4(),
    //     title:"Default Title",
    //     content: "Hello!!"
    // }
]


//all posts with base
app.get("/", (req, res)=>{
    res.render("index.ejs", {posts});
})
app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
})


//Create!!
app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req, res)=>{
    let {title, content}= req.body;
    let id= uuidv4();
    posts.push({id, title, content});
    res.redirect("/posts");
})

//update option
app.get("/posts/:id/edit", (req, res)=>{
    let {id}= req.params;
    const post= posts.find((p)=>id===p.id);
    res.render("edit.ejs", {post})
})
//update
app.put("/posts/:id", (req, res)=>{
    let {id}= req.params;
    const post= posts.find((p)=>id===p.id);
    let newContent=req.body.content;
    post.content= newContent;
    res.redirect("/posts");
})

//delete
app.delete("/posts/:id", (req, res)=>{
    let {id}= req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})
 
module.exports = app;

// app.listen(port, ()=>{
//     console.log(`Server started to run in port no: ${ port }`);
// }) 
