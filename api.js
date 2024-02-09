require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRouter = require("./routes/user-routes");
const firstDishesRouter = require("./routes/firstDish-router");
const secondDishesRouter = require("./routes/secondDish-router");
const sideDishesRouter = require("./routes/sideDish-router");
const saladsRouter = require("./routes/salad-router");
const dessertsRouter = require("./routes/dessert-router");
const dalyMenuRouter = require("./routes/menu-routes");

const PORT = 3002;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(userRouter, firstDishesRouter, secondDishesRouter, sideDishesRouter, saladsRouter, dessertsRouter, dalyMenuRouter)

mongoose
    .connect(process.env.URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));



app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});