const express = require("express");
const hbs = require("hbs");
const path = require("path");
const verdurasRouter = require("./routes/verdurasRouter")
const app = express();
app.use("/verduras", verdurasRouter)
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, console.log("Listen at port 3000"));
