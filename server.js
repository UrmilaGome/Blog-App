const express = require('express');
const connectDB = require('./config/db_config');
const dotenv = require("dotenv").config();
const app = express();

const PORT = process.env.PORT  || 5500;

//DB Connection
//if it is shown any error in connecting DB check env file MONGO_URI
connectDB();


//Body Parser

app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Entry Route
app.get("/", (req,res) =>{
    res.json({msg : "WELCOME TO BLOG API"});
})

//Blog Routes
app.use("/api/blogs",require("./routes/blogRoutes"))

app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT}`);
});
