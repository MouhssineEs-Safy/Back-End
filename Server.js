const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "Welcome to our website. ''We are currently working on the site.''Thank you for your understanding.  ",
  );
});

app.listen(3650);
