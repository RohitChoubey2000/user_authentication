const express = require("express");
const app  = express();

app.get("/api/user", (request,response)=> {
    response.status(200).json({name: "Rohit" ,email: "rohitranjan488gmail.com"})
});

app.listen(4000,(error)=>{
    if(error) console.log("Error" + error);
    console.log("Server is running on port 4000")
})