import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { ConnectMongo } from "./db.js";
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { io, app, httpserver } from './lib/socket.js';

dotenv.config();

/* ✅ CORS CONFIG — MUST BE FIRST */
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://talko-orcin.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

/* ✅ HANDLE PREFLIGHT REQUESTS */
app.options("*", cors(corsOptions));

app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const port = process.env.PORT || 5000;
httpserver.listen(port, () => {
  console.log(`Server running on port ${port}`);
  ConnectMongo();
});
