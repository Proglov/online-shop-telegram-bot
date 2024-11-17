require('dotenv').config();
const { Telegraf } = require('telegraf');
const { SocksProxyAgent } = require('socks-proxy-agent');

const { start, help, login } = require('../routes/basicCommands.js');


const BOT_TOKEN = process.env.Telegram_Token;
const SOCKS_PROXY = process.env.SOCKS_PROXY;

const agent = new SocksProxyAgent(SOCKS_PROXY);

const bot = new Telegraf(BOT_TOKEN, {
    telegram: {
        agent: agent
    }
});

bot.start(start);
bot.help(help);
bot.command('login', ctx => login(ctx))

bot.on('text', ctx => {
    // const message = ctx.message.text
    // console.log(typeof ctx.message.from.id);
})


module.exports = bot;