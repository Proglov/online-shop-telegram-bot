require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('colors');


const corsOptions = require('./src/config/corsOptions');
const bot = require('./src/config/telegram');
const mainRouter = require('./src/routes/sendNotification');

const app = express()


const PORT = process.env.PORT || 3500;


app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/notif', mainRouter)

app.listen(PORT, () => {
    // Start the bot
    bot.launch()
        .then(() => {
            console.error('bot is connected successfully'.green);
        })
        .catch(err => {
            console.error('Error launching the bot:'.red, err);
        });
    console.log(`server running on port ${PORT}`.blue)
})