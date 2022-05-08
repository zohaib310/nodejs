const PORT = 8000;
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const rootDir = require("./util/path");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/add-product", (req, res, next) => {
//   res.send(
//     "<form action='/product' method='POST'><input type='text' name='title' ><button type='submit'>Add Product</button></form>"
//   );
// });

// app.use("/product", (req, res, next) => {
//   console.log("Request object =>", req.body);
//   res.redirect("/");
// });

app.use("/admin", adminRoutes);

// app.use("/", (req, res, next) => {
//   console.log("Inside second middleware");
//   res.send("<h1>Hello from Express Server Root Path.</h1>");
// });
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
  //   res.send("<h1>Not found.</h1>");
});
// const server = http.createServer(app);
// server.listen(PORT);

app.listen(PORT);
