const express = require("express");
const fs = require("fs");
const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

//get current year for footer
let today= new Date();
let currentYear = today.getFullYear();

app.get("/", function(req,res){
  res.render("index", {currentYear: currentYear});
}
)

app.get("/resume", (req, res) => {
  res.download("./public/DanielYuResume.pdf");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
};
app.listen(port, function() {
  console.log("Server has started successfully");
});
