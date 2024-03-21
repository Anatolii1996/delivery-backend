require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user-routes");
const firstDishesRouter = require("./routes/firstDish-router");
const secondDishesRouter = require("./routes/secondDish-router");
const sideDishesRouter = require("./routes/sideDish-router");
const saladsRouter = require("./routes/salad-router");
const dessertsRouter = require("./routes/dessert-router");
const dalyMenuRouter = require("./routes/menu-routes");
const ordersRouter = require("./routes/orders-router");
const dalyOrdersRouter = require("./routes/dalyOrders-router");
const dalyOrdersRouter = require("./routes/dalyOrders-router");

// const imageRouter = require("./routes/image-router");

const PORT = 3002;

const app = express();
app.use(cookieParser());

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(cors({
    credentials: true,
    origin:process.env.FRONTEND_URL
}));

app.use(userRouter, firstDishesRouter, secondDishesRouter, sideDishesRouter, saladsRouter, dessertsRouter, dalyMenuRouter, ordersRouter, dalyOrdersRouter
    // , imageRouter
)

const start = async () => {
    try {
        await mongoose
            .connect(process.env.URL)
            .then(() => console.log('Connected to MongoDB'))
            .catch((err) => console.log(`DB connection error: ${err}`));

        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Listening port ${PORT}`);
        });
    } catch (e) {
        console.log(e)
    }
};

start();