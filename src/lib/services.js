require('dotenv').config();

const api = process.env.BackEnd_API

const login = async (obj) => {
    const response = await fetch(api + '/telegramPost/CheckCodeForTelegram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    return response
}

const logout = async (obj) => {
    const response = await fetch(api + '/telegramPost/logoutFromTelegram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    return response
}

const checkStatus = async (obj) => {
    const response = await fetch(api + '/telegramPost/CheckTelegramStatusFromBot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    return response
}

module.exports = {
    login,
    logout,
    checkStatus
}