require('dotenv').config();
const express = require('express');
const cors = require('cors');


const corsOptions = require('./src/config/corsOptions');
const bot = require('./src/config/telegram');

const app = express()


const PORT = process.env.PORT || 3500;


app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    // Start the bot
    bot.launch()
        .then(() => {
        })
        .catch(err => {
            console.error('Error launching the bot:', err);
        });
    console.log(`server running on port ${PORT}`.blue)
})