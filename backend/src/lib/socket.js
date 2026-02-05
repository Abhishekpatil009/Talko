import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const httpserver = http.createServer(app);

const io = new Server(httpserver, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://talko-yeo6.onrender.com",
    ],
    credentials: true,
  },
});

const userSocketMap = {}; // { userId: socketId }

export function getRecieverSocketId(userId) {
  return userSocketMap[userId];
}

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    if (userId) {
      delete userSocketMap[userId];
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, httpserver };
