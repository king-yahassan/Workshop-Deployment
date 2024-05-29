const express = require("express")
const cors = require("cors")

require("dotenv").config({path : "./Config/.env"})
require("./Config/db")

const app = express()

app.use(cors())
app.use(express.json())

const routes = require("./Routes/Routes")
app.use("/api" , routes)
const port = process.env.PORT || 5002

app.listen(port , () =>{
    console.log(`Server is Running on port : ${port}...`);
})

