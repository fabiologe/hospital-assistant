import express from "express";
import http from "http";
import bodyParser from "body-parser";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://health.tobi4s.dev", "http://localhost:3000"], // Your frontend server
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/event", (req, res) => {
  const type = req.body.type;

  if (type === "ASSISTANT_MESSAGE" || type === "INTERNAL_MONOLOGUE") {
    io.emit("MESSAGE", {
      msg: req.body.msg,
      type,
    });
  }

  // long term memory updates

  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
