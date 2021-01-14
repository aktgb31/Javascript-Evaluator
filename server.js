const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/public"));

function decrypt(req, res, next) {
  for (let q in req.query) {
    let l = req.query[q].split("");
    for (var i = 0; i < l.length; i++) {
      if (l[i] == l[i].toLowerCase()) l[i] = l[i].toUpperCase();
      else l[i] = l[i].toLowerCase();
    }
    req.query[q] = l.join("");
  }
  next();
}

function decode(req, res, next) {
  for (let q in req.query) {
    let data = req.query[q];
    data = new Buffer(data, "base64").toString("ascii");
    req.query[q] = data;
    console.log(data);
  }
  next();
}

app.get("/result", decrypt, decode, (req, res) => {
  let result = [];
  for (let q in req.query) {
    result.push(eval(req.query[q]));
  }
  let answer = result.join("");
  res.send("Result<br>" + answer);
});

app.listen(4343, () => {
  console.log("Server started on http://localhost:4343");
});
