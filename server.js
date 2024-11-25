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

let botConf = {}
if (process.env.ENVIRONMENT === 'dev') {
    app.post('/webhook', (req, res) => {
        bot.handleUpdate(req.body).then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.error('Error handling update:', err);
            res.sendStatus(500);
        });
    })
    botConf = {
        webhook: {
            domain: process.env.BASE_URL,
            path: 'webhook',
            port: PORT
        }
    }
}

app.listen(PORT, async () => {

    // Start the bot
    bot.launch(botConf)
        .then(() => {
            console.error('bot is connected successfully'.green);
        })
        .catch(err => {
            console.error('Error launching the bot:'.red, err);
        });

    console.log(`Server running on port ${PORT}`.blue);
});
