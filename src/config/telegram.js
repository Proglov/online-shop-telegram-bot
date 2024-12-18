require('dotenv').config();
const { Telegraf } = require('telegraf');
const { SocksProxyAgent } = require('socks-proxy-agent');

const { start, help, login, status } = require('../routes/basicCommands.js');
const { getCode, logout } = require('../routes/loging.js');


const BOT_TOKEN = process.env.Telegram_Token;
const SOCKS_PROXY = process.env.SOCKS_PROXY || null;


let bot;
if (process.env.ENVIRONMENT === 'dev') {
    const agent = new SocksProxyAgent(SOCKS_PROXY);
    bot = new Telegraf(BOT_TOKEN, { telegram: { agent } });
}
else bot = new Telegraf(BOT_TOKEN);

bot.start(start);
bot.help(help);
bot.command('login', login)
bot.command('status', status)
bot.command('logout', async (ctx) => {
    const { message, status } = await logout(ctx.chat.id)
    if (status === 201)
        ctx.reply('اطلاع رسانی با موفقیت لغو شد')
    else ctx.reply(message)
})

bot.on('text', async (ctx) => {
    const message = ctx.message.text
    if (message.startsWith('C')) {
        const { message: resMessage, status, storeName } = await getCode(message.slice(1), ctx.chat.id)
        if (status === 201)
            ctx.reply(`شما به فروشگاهِ "${storeName}" متصل شدید!\nهرگونه خرید از فروشگاه به شما اطلاع رسانی میگردد`)
        else ctx.reply(resMessage)
    }
    else {
        help(ctx)
    }
})


module.exports = bot;