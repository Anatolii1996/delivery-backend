const Order = require("../models/order");
const { handleError } = require("../helper")

const getDalyOrders = async (req, res) => {
    try {
        const orders = await Order.find(); // Получаем все записи из коллекции "orders"
        const ordersArray = orders.map(order => order.toObject()); // Преобразуем объекты заказов в простые JavaScript объекты

        res.status(200).json(ordersArray); // Отправляем массив заказов в ответ
    } catch (error) {
        handleError(res, error); // Обрабатываем возможные ошибки
    }
};



module.exports = { getDalyOrders };