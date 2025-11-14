const express = require("express");
const app  = express();

app.get("/api/users", (request, response) => {
   db.query("SELECT * FROM users", (error, results) => {
     if (error) {
       console.error("Database error:", error);
      return response.status(500).json({ message: "Server internal error" });
     }
    response.status(200).json(results); // return database
  });
 });


app.listen(4001,(error)=>{
    if(error) console.log("Error" + error);
    console.log("Server is running on port 4001")
})