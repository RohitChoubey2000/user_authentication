const express = require("express");
const app  = express();

app.use(express.json());

app.get("/api/user",async(request, response)=>{
    const  result =await db.query("SELECT * FROM users")
    response.status(200).json(result);

});


app.listen(4001,(error)=>{
    if(error) console.log("Error" + error);
    console.log("Server is running on port 4001")
})