// M1

//M3
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Express");
});

app.get("/date", (req, res) => {
  const now = new Date();
  res.send(`Bugungi sana: ${now.toLocaleDateString()}`);
});

app.get("/random", (req, res) => {
  res.json(Math.floor(Math.random() * 100));
});

app.get("/user/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/double/:num", (req, res) => {
  res.json(req.params.num * 2);
});

app.get("/sum", (req, res) => {
  res.send(`Result: ${+req.query.a + +req.query.b}`);
});

app.get("/reverse", (req, res) => {
  const text = req.query.text;

  res.send(text.split("").reverse().join(""));
});

// M4.1

app.get("/info", (req, res) => {
  res.status(200).json({
    name: "Shahriyor",
    age: 18,
    city: "Angren",
  });
});

// M4.2

app.get("/math/multiply", (req, res) => {
  res.status(200).json(`result: ${+req.query.a * +req.query.b}`);
});

// M4.3
app.get("/profile/:username",(req,res)=>{
    res.send({
        username :req.params.username,
        status:"Active"
    })
})

// M4.4
app.get("/weather",(req,res)=>{
    res.send({
        city :req.query.city || "Tashkent",
        temp:req.query.temp ||30,
        status:req.query.status || "Sunny"
    })
})


// 5.1
// app.use((req, res) => res.status(404).json({ error: "Not Found" }));


// M5.2
app.use((req, res) => {
    res.status(404).send(`
        <h1 style="text-align: center; color: red;">Oops! This page does not exist !</h1>
        
    `);
});




app.listen(8000);
