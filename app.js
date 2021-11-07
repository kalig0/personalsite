const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
//         const request = require("request");
// const { DownloaderHelper } = require('node-downloader-helper');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("index");
}
)

// endpoint for /resume
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
