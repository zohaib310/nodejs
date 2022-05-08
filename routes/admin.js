const express = require("express");
const rootDir = require("../util/path");
const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log("REQUEST =>", req.body);
  res.redirect("/");
});

module.exports = router;
