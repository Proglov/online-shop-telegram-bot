


const start = ctx => {
    ctx.reply(`به ربات فروشگاه ما خوش اومدی!\nبرای دریافت اطلاع رسانی از خرید مشتریان، وارد پنل مدیریت سایت شده، سپس یک کد دریافت کرده و آن را در این ربات وارد کنید! دریافت اطلاعات بیشتر: /help`);
}

const help = ctx => {
    ctx.reply('/login : وارد کردن کد و همگامسازی با فروشگاه \n/logout : لغو دریافت اطلاع رسانی \n/status: مشاهده وضعیت حساب تلگرام')
}

const login = ctx => {
    ctx.reply('لطفا کدی که از سایت دریافت کرده اید را وارد کنید')
}

const status = ctx => {

}

module.exports = {
    start,
    help,
    login
}