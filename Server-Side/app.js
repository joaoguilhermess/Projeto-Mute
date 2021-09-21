const fs = require("fs");
const fetch = require("node-fetch");
const express = require("express");
var app = express();

const always = false;

function logip(str, ip) {
  var n = "logip.json";
  var l = [];
  if (fs.existsSync(n)) {
    l = JSON.parse(fs.readFileSync(n));
  }
  var o =
    "Date: " +
    Date().toLocaleString() +
    " || Log: " +
    str +
    " || Remote Address: " +
    ip;
  l.push(o);
  console.log(o);
  fs.writeFileSync(n, JSON.stringify(l, null, "\t"));
}

if (always) {
  setInterval(function() {
    fetch("https://playground-jg.glitch.me/ping");
  }, 4.5 * 60 * 1000);
}

app.get("/white", function(req, res) {
  logip("white", req.headers["x-forwarded-for"].split(",")[0]);
  res.sendFile("/app/Mute/white.js");
});
app.get("/black", function(req, res) {
  logip("black", req.headers["x-forwarded-for"].split(",")[0]);
  res.sendFile("/app/Mute/black.js");
});

app.get("/ping", function(req, res) {
  console.log("ping");
});

app.get("*", function(req, res) {});

app.listen(3000, function() {
  console.log("Pronto");
});
