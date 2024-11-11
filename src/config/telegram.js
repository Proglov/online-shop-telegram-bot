require('dotenv').config();
const { Telegraf } = require('telegraf');

const BOT_TOKEN = process.env.Telegram_Token;

const bot = new Telegraf(BOT_TOKEN);

// Example command handler
bot.start((ctx) => ctx.reply('Welcome!'));
bot.help((ctx) => ctx.reply('Help!'));
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));


module.exports = bot;