import express from "express";
import { mongo } from "./config/config.js";

const app = express();

mongo()
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error.message));

app.listen(3030, console.log(3030));
