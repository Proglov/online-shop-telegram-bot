const { login, logout: logoutApi } = require("../lib/services")



const getCode = async (message, telegramId) => {
    if (typeof message !== 'string' || message.length !== 5) return {
        status: 400,
        message: 'کد دریافتی صحیح نمیباشد',
        storeName: null
    }

    try {
        const response = await login({
            input: {
                code: message.toUpperCase(),
                telegramId,
                auth: 'IMADMIN'
            }
        })

        const json = await response.json()

        return {
            message: json?.message,
            status: response.status,
            storeName: json?.storeName
        }
    } catch (error) {
        return {
            status: 500,
            message: 'مشکلی رخ داده است',
            storeName: null
        }
    }

}

const logout = async (telegramId) => {
    try {
        const response = await logoutApi({
            input: {
                telegramId,
                auth: 'IMADMIN'
            }
        })

        const json = await response.json()

        return {
            message: json?.message,
            status: response.status
        }
    } catch (error) {
        return {
            status: 500,
            message: 'مشکلی رخ داده است'
        }
    }

}

module.exports = {
    getCode,
    logout
}