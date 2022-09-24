const express = require("express");
const app = express();
const newsRouter = require("./router/news");

app.use(express.static("public"));
app.use(express.static("data/uploads"));
app.use("/api", newsRouter); // => localhost:3000/api.create

app.listen(3000, () => {
  console.log("Port is listing.");
});
