const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Table1 = require("./Model.js");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ganesh:Ganesh2024!@ganesh.nh4x9rr.mongodb.net/Blog?retryWrites=true&w=majority&appName=Ganesh")
.then(() => {
    console.log("Database connected");
})
.catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
});

app.post("/cp", (req, res) => {
    const { Name, Img, Price, Desc, Stock } = req.body;

    Table1.create({ Name, Img, Price, Desc, Stock })
    .then(() => {
        console.log("Entry created");
        res.status(201).send("Entry created successfully");
    })
    .catch((error) => {
        console.error("Failed to create entry:", error);
        res.status(500).send("Failed to create entry");
    });
});

// app.get("/",(req.res)=>{
//     Table1.find({})
//     .then((data)=>{res.send(data)
//         console.log(data);
//     })
//     .catch((e)=>{
//         console.log("Fetch Data failled");
//     })
// })
app.get("/",(req,res)=>{
    Table1.find({}).then((D)=>{res.send(D)}).catch((e)=>{
        console.log(e,"fetch failled");
    })
})





app.listen(7000, () => {
    console.log("Server running at http://localhost:7000");
});



