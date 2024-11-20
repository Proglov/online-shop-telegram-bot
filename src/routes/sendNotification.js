const express = require('express');

const bot = require('../config/telegram');
const { formatPrice } = require('../utils/functions');

const router = express.Router();

router.post('/sendNotification', async (req, res) => {
    const args = req?.body
    const { telegramId, auth, price } = args

    try {
        if (!telegramId || auth !== 'IMADMIN' || typeof price !== 'number') return {
            status: 400,
            message: 'ایدی تلگرام و قیمت الزامیست'
        }

        await bot.telegram.sendMessage(telegramId, `فروشگاه شما یک سفارش به مبلغ ${formatPrice(price)} تومان دارد.\nلطفا جهت اطلاع بیشتر، وارد پنل مدیریت خود در سایت شوید`);

    } catch (error) { }

    //temporarily ok response is hard coded
    res.status(200).json({ message: 'ok' });
})


module.exports = router;