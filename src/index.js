import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(express.json()); // interpreting json

app.use("/api", employeesRoutes);
app.use(indexRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "No Endpoint Found!",
  });
});

app.listen(PORT);

console.log("Server on port", PORT);
