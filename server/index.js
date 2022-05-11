/**
 * importing framework express
 */
import express from "express";
/**
 * importing bodyparser wich parses incoming requests
 */
import bodyParser from "body-parser";
/**
 * importing CORS supports secure cross-origin requests and data transfers between browsers and servers.
 */
import cors from "cors";
/**
 * importing userRoutes for the different endpoints
 */
import userRoutes from "./routes/route.js";
/**
 * init express
 */
const app = express();
/**
 * creating portS
 */
const port = 5000;
/**
 * using method use() on the app variable
 * use() method allows us to register a middleware and always executes for all requests.
 */
app.use(bodyParser.json());
app.use(cors());
/**
 * use() method for the routes
 */
app.use("/", userRoutes);
/**
 * The all() function is used to routing all types of HTTP request.
 */
app.all("*"), (req, res) => res.send("That route doesn't exist");
/**
 * listening on port 5000
 */
app.listen(port, () =>
  console.log(`server is listening port : http://localhost:${port}`)
);
