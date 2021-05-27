require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("./db/index");

const app = express();

app.use(express.json());



