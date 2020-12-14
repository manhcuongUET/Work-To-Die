require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./api");
const io = require("socket.io");
require("./repositories");

const app = express();

const httpServer = http.createServer(app);

const ioServer = io(httpServer);

app.use(cors());
app.use(bodyParser.json());
app.use(router);

const PORT = 5050;
httpServer.listen(PORT, () => {
  console.log("App is running at " + PORT);
});
