import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("hello From Express "));
app.all("*"), (req, res) => res.send("That route doesn't exist");

app.listen(port, () =>
  console.log(`server is listening port : http://localhost:${port}`)
);
