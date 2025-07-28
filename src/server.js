import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import notificationRoutes from "./routes/notification.route.js";

import { env } from "./config/env.config.js";
import { dbConfig } from "./config/db.config.js";
import { arcjetMiddleware } from "./middleware/arcjet.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.use(arcjetMiddleware);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});


const startServer = async () => {
  try {
    await dbConfig();

    // listen for local development
    if (env.node_env !== "production") {
      app.listen(env.port, () => console.log("Server is up and running on PORT:", env.port));
    }
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

// export for vercel
export default app;