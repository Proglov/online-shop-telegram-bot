const { checkStatus } = require("../lib/services");



const start = ctx => {
    ctx.reply(`به ربات فروشگاه ما خوش اومدی!\nبرای دریافت اطلاع رسانی از خرید مشتریان، وارد پنل مدیریت سایت شده، سپس یک کد دریافت کرده و آن را در این ربات وارد کنید! دریافت اطلاعات بیشتر: /help`);
}

const help = ctx => {
    ctx.reply('/login : وارد کردن کد و همگامسازی با فروشگاه \n/logout : لغو دریافت اطلاع رسانی \n/status: مشاهده وضعیت حساب تلگرام')
}

const login = ctx => {
    ctx.reply('لطفا کدی که از سایت دریافت کرده اید را وارد کنید')
}

const status = async (ctx) => {
    try {
        const response = await checkStatus({
            input: {
                telegramId: ctx.chat.id,
                auth: 'IMADMIN'
            }
        })

        const json = await response.json()

        if (response?.status !== 200)
            ctx.reply('شما به هیچ فروشگاهی متصل نیستید')

        else ctx.reply(`شما به فروشگاهِ "${json?.storeName}" متصل هستید`)
    } catch (error) {
        ctx.reply('مشکلی رخ داده است')
    }
}

module.exports = {
    start,
    help,
    login,
    status
}