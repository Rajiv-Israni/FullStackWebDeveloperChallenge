const express = require("express");
const bodyParser = require("body-parser");

const dataFetcher = require("./fetchData.js");

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.get("/search/:param", dataFetcher.getData);


app.listen(5000,() => console.log('listening'));