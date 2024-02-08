require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./routes/user-routes");
const firstDishesRouter = require("./routes/firstDdish-router");

const PORT = 3002;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(userRouter, firstDishesRouter)

mongoose
    .connect(process.env.URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));



app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});