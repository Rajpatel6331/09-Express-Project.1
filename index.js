const  express = require('express')

const app=express()
app.set("view engine","ejs")
app.use(express.static('public'))


const port=8000;
 

app.get('/',(req,res)=>{
    res.render("home");
})

app.get('/about',(req,res)=>{
    res.render("about");
})

app.get('/contact',(req,res)=>{
    res.render("contact");
})



 

app.listen (port,()=>{
    console.log(`server started on http://localhost:${port}`)

});