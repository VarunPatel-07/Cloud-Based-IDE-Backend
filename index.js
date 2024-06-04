const express = require("express");
const app = express();
const port = 500;
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
app.use(express.json());
const io = new Server({
  cors: "*",
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
io.attach(server);
